import chalk from 'chalk'
import ora from 'ora'
import getArgs from './args'
import { getFiles } from './files'
import { formatWithPrettier } from './prettier'

const bootstrap = async () => {
    const spinner = ora(chalk.cyan('Use Script Options:')).start()
    spinner.succeed()
    const { args, table } = getArgs()
    console.log(table)
    await getFiles(args).then(formatWithPrettier)
}

bootstrap()
