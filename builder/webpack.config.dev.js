const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')

const devConfig = {
    mode: 'development',
    devServer: {
        openPage: '',
        historyApiFallback: true,
        stats: 'errors-only',
    }
}

module.exports = merge(webpackConfig, devConfig)
