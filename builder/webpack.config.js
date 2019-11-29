const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        filename: 'code-formatter.js',
        path: path.resolve(__dirname, '../dist')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/'),
            '~': path.resolve(__dirname, '../node_modules/')
        },
        extensions: ['.ts', '.js', '.json', '*']
    }
}
