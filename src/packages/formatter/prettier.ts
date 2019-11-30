import chalk from 'chalk'
// @ts-ignore
import cliProgress from 'cli-progress'
import fs from 'fs'
import ora from 'ora'
import path from 'path'
import prettier from 'prettier'

const prettierOptions = prettier.resolveConfig.sync(path.resolve(process.cwd(), '.prettierrc'))

export async function formatWithPrettier(files: string[]) {
    await executePrettier(checkFilesIfDiff(files)).finally(() => {
        ora('Formatted successfully').succeed()
    })
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
        const ease = () => new Promise(r => setTimeout(() => r(), 20))
        files.forEach(filePath => {
            pTask = pTask.then(async () => {
                await format(filePath, prettierOptions!)
                await ease()
                bar.increment()
            })
        })
        await pTask
        bar.stop()
    } else {
        ora('No files needs to be update').warn()
    }
}

function checkFilesIfDiff(files: string[]) {
    if (!prettierOptions) {
        throw new Error('Do not find a prettierc config file')
    }

    const spinner = ora('Analyzing files').start()
    const checkedFiles = files.filter(filePath => {
        return !checkFileIsFormatted(filePath, prettierOptions)
    })
    spinner.succeed()
    return checkedFiles
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
