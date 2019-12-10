import chalk from 'chalk'
// @ts-ignore
import Table from 'cli-table3'

export function createCliTable(head: string[], body: string[][]) {
    const table = new Table({
        head: head.map(val => chalk.cyan(val))
    })

    table.push(...body as any)

    return table.toString()
}
