import path from 'path'
import prettier from 'prettier'

const optionsMap = new Map()

export const getPrettierOptions = (fileSuffix?: string) => {
    let parser: string = 'typescript'
    switch (fileSuffix) {
        case '.js':
            parser = 'babylon'
            break
        case '.vue':
            parser = 'vue'
            break
    }
    const cached = optionsMap.get(parser)
    if (cached) {
        return cached
    }
    const prettierOptions = prettier.resolveConfig.sync(path.resolve(process.cwd(), '.prettierrc'))
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
