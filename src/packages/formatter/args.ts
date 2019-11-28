import argv from 'yargs'
import { createCliTable } from './table'

export const FILE_TYPES = ['ts', 'js', 'all']
const CHANGE_TYPES = ['cached', 'all']
const options = argv

    .option({
        file_type: {
            describe: 'Specify the file type',
            demandOption: true,
            default: FILE_TYPES[0]
        }
    })
    .choices('file_type', FILE_TYPES)

    .option({
        change_type: {
            describe: 'Specify the change type',
            demandOption: true,
            default: CHANGE_TYPES[1]
        }
    })
    .choices('change_type', CHANGE_TYPES)

    .option({
        path: {
            describe: 'Specify the path for the files include',
            demandOption: true,
            default: 'src'
        }
    })

    .option({
        exclude: {
            describe: 'Specify the path for the files exclude',
            demandOption: true,
            default: 'node_modules'
        }
    })

    .help().argv

const { $0, _, ...args } = options
const tableData = Object.entries(args).reduce(
    (acc, cur) => {
        acc.body.push(cur as string[])
        return acc
    },
    {
        head: ['name', 'value'],
        body: [] as string[][]
    }
)

const { head, body } = tableData
const tResult = createCliTable(head, body)

export default function getArgs() {
    return {
        args: args as { [key: string]: string },
        table: tResult
    }
}
