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
                    .filter(fullPath => {
                        if (file_type !== 'all') {
                            return fullPath.endsWith(file_type)
                        }

                        return FILE_TYPES.some(type => fullPath.endsWith(type))
                    })

                resolve(files)
            })
        } else {
            const rootDir = process.cwd()
            const findByExcludeSyntax = exclude ? `! -path "${path.join(rootDir, exclude)}/*"` : ''
            const findFileMatches = file_type === 'all' ? '' : `-name '*.${file_type}'`
            const findPath = argPath ? (argPath.startsWith('/') ? argPath : `/${argPath}`) : ''
            const findSyntax = `find ${rootDir}${findPath} -type f ${findByExcludeSyntax} ${findFileMatches}`
            // console.log(findSyntax)

            exec(findSyntax, (error, stdout, stderr) => {
                const files = stdout.split('\n').filter(Boolean)
                resolve(files)
            })
        }
    })
}
