import chalk from 'chalk'
// @ts-ignore
import cliProgress from 'cli-progress'
import fs from 'fs'
import ora from 'ora'
import prettier from 'prettier'
import { getPrettierOptions } from './options'

export async function formatWithPrettier(files: string[]) {
    await executePrettier(await checkFilesIfDiff(files))
}

async function executePrettier(files: string[]) {
    const count = files.length
    const bar = new cliProgress.SingleBar(
        {
            format: chalk.cyan('|{bar}| {percentage}% | {value}/{total}'),
            hideCursor: true,
            clearOnComplete: true
        },
        cliProgress.Presets.rect
    )

    if (count > 0) {
        bar.start(count, 0)

        let pTask = Promise.resolve()
        const ease = () => new Promise(r => setTimeout(() => r(), 20))
        files.forEach(filePath => {
            pTask = pTask.then(async () => {
                const type = filePath.match(/\.[^\.]+$/)![0]
                await format(filePath, getPrettierOptions(type)!)
                await ease()
                bar.increment()
            })
        })
        await pTask
        bar.stop()
        ora(`Success! Formatted ${count} files`).succeed()
    } else {
        ora('No files needs to be update').warn()
    }
}

async function checkFilesIfDiff(files: string[]) {
    const spinner = ora('Analyzing files...').start()

    await new Promise(r => setTimeout(() => r(), 1000))
    spinner.succeed(`Found ${files.length} files`)

    const bar = new cliProgress.SingleBar(
        {
            format: chalk.cyan('|{bar}| {percentage}% | {value}/{total}'),
            hideCursor: true,
            clearOnComplete: true
        },
        cliProgress.Presets.rect
    )
    bar.start(files.length, 0)

    if (!getPrettierOptions()) {
        throw new Error('Do not find a prettierc config file')
    }
    const ease = () => Promise.resolve()
    const checkedFiles = []
    for (const filePath of await Promise.resolve(files)) {
        await ease()
        const type = filePath.match(/\.[^\.]+$/)![0]        
        const formatted = checkFileIsFormatted(filePath, getPrettierOptions(type))
        bar.increment()
        if (!formatted) {
            checkedFiles.push(filePath)
        }
    }
    bar.stop()
    spinner.succeed('Analyzed files')
    process.stdout.write('\r\x1b[K')
    return checkedFiles
}

export function checkFileIsFormatted(filePath: string, options: prettier.Options) {
    const file = fs.readFileSync(filePath, 'utf8')
    try {
        const isFormated = prettier.check(file, options)
        return isFormated
    } catch (error) {
        console.log(`\n${chalk.red(filePath)}`)
        console.log(chalk.red(error))
        process.exit(1)
    }
}

function format(filePath: string, options: prettier.Options): Promise<void> {
    const file = fs.readFileSync(filePath, 'utf8')
    const formated = prettier.format(file, options)
    fs.writeFileSync(filePath, formated)
    return Promise.resolve()
}
