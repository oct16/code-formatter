import path from 'path'
import prettier from 'prettier'

export const getPrettierOptions = () => {
    const prettierOptions = prettier.resolveConfig.sync(path.resolve(process.cwd(), '.prettierrc'))
    return prettierOptions
}
