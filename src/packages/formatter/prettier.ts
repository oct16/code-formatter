import chalk from 'chalk'
import fs from 'fs'
import ora from 'ora'
import path from 'path'
import prettier from 'prettier'
const cliProgress = require('cli-progress')

const prettierOptions = prettier.resolveConfig.sync(path.resolve(process.cwd(), '.prettierrc'))

export function formatWithPrettier(files: string[]) {
    executePrettier(checkFilesIfDiff(files))
}

async function executePrettier(files: string[]) {
    const count = files.length
    const bar = new cliProgress.SingleBar(
        {
            format: chalk.cyan('|{bar}| {percentage}% | {value}/{total}'),
            hideCursor: true
        },
        cliProgress.Presets.rect
    )

    if (count > 0) {
        ora({
            text: chalk.cyan('Prettier is formatting!')
        }).stopAndPersist({
            symbol: '🧨 '
        })
        bar.start(count, 0)

        let pTask = Promise.resolve()
        const wait = () => new Promise(r => setTimeout(() => r(), 200))
        files.forEach(filePath => {
            pTask = pTask.then(async () => {
                await format(filePath, prettierOptions!)
                await wait()
                bar.increment()
            })
        })

        await pTask
        bar.stop()
    } else {
        ora('No files needs to be update').succeed()
    }
}

function checkFilesIfDiff(files: string[]) {
    if (!prettierOptions) {
        throw new Error('Do not find a prettierc config file')
    }

    return files.filter(filePath => {
        return !checkFileIsFormatted(filePath, prettierOptions)
    })
}

export function checkFileIsFormatted(filePath: string, options: prettier.Options) {
    const file = fs.readFileSync(filePath, 'utf8')
    try {
        const isFormated = prettier.check(file, options)
        return isFormated
    } catch (error) {
        console.log(chalk.bgRed(filePath))
        console.log(chalk.bgRed(error))
        process.exit(1)
    }
}

function format(filePath: string, options: prettier.Options): Promise<void> {
    const file = fs.readFileSync(filePath, 'utf8')
    const formated = prettier.format(file, options)
    fs.writeFileSync(filePath, formated)
    return Promise.resolve()
}
