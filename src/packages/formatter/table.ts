import chalk = require('chalk')

let Table = require('cli-table2')

export function createCliTable(head: string[], body: string[][]) {
    const table = new Table({
        head: head.map(val => chalk.cyan(val))
    })

    table.push(...body)

    return table.toString()
}
