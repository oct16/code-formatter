import path from 'path'
import prettier from 'prettier'

const optionsMap = new Map()

export const getPrettierOptions = (fileSuffix?: string) => {
    let parser: string = 'typescript'
    switch (fileSuffix) {
        case '.js':
            parser = 'babel'
            break
        case '.vue':
            parser = 'vue'
            break
    }
    const cached = optionsMap.get(parser)
    if (cached) {
        return cached
    }

    const __path = process.env.__path
    let prettierOptions
    if (__path) {
        const argsPathNestArray = __path
            .split('/')
            .reduce((acc, cur, i, arr) => {
                acc.push([arr[i - 1], cur].join('/').toString())
                return acc
            }, [] as string[])
            .reverse()

        for (const p of argsPathNestArray) {
            const opt = prettier.resolveConfig.sync(path.resolve(process.cwd(), p, '.prettierrc'))
            if (opt) {
                prettierOptions = opt
                break
            }
        }
    } else {
        prettierOptions = prettier.resolveConfig.sync(path.resolve(process.cwd(), '.prettierrc'))
    }
    if (parser) {
        const specifiedOptions = {
            ...prettierOptions,
            parser
        }
        optionsMap.set(parser, specifiedOptions)
        return specifiedOptions
    }

    return prettierOptions
}
