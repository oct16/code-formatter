const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')

const devConfig = {
    mode: 'development',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}

module.exports = merge(webpackConfig, devConfig)
