const webpackConfig = require('./webpack.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const productionConfig = {
    mode: 'production',
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 6
                },
                parallel: 4
            })
        ]
    }
}

module.exports = merge(webpackConfig, productionConfig)
