const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true,
        open: true,
        watchFiles: ['src/**/*', 'public/**/*'],
    },
    optimization: {
        runtimeChunk: 'single',
    },
});