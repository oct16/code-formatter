import * as child from 'child_process'
import path from 'path'
import { FILE_TYPES } from './args'
const { exec } = child

export function getFiles(args: { [key: string]: string }): Promise<string[]> {
    return new Promise(resolve => {
        const { file_type, change_type, path: argPath, exclude } = args
        if (change_type === 'cached') {
            exec('git diff --name-only --cached', (error, stdout, stderr) => {
                if (error) {
                    throw new Error(error.message)
                }
                const files = stdout
                    .split('\n')
                    .filter(Boolean)
                    .map(itemPath => {
                        const fullPath = path.join(process.cwd(), itemPath)
                        return fullPath
                    })

                resolve(filterByFileType(files, file_type))
            })
        } else {
            const rootDir = process.cwd()
            const findPath = argPath ? (argPath.startsWith('/') ? argPath : `/${argPath}`) : ''
            const findByExcludeSyntax = exclude ? `! -path "${path.join(rootDir, findPath, exclude)}/*"` : ''
            const findFileMatches = file_type === 'all' ? '' : `-name '*.${file_type}'`
            const findSyntax = `find ${rootDir}${findPath} -type f ${findByExcludeSyntax} ${findFileMatches}`

            exec(findSyntax, (error, stdout, stderr) => {
                const files = stdout.split('\n').filter(Boolean)
                resolve(filterByFileType(files, file_type))
            })
        }
    })
}

function filterByFileType(files: string[], fileType: string) {
    return files.filter(fullPath => {
        if (fileType !== 'all') {
            return fullPath.endsWith(fileType)
        }
        return FILE_TYPES.slice(1, FILE_TYPES.length).some(type => fullPath.endsWith(type))
    })
}
