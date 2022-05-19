const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name][contenthash].bundle.js',
        chunkFilename: '[name][contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devServer: {
        client: {
            overlay: false,
        },
        compress: true,
        open: true,
        watchFiles: ['src/**/*', 'public/**/*'],
        port: 9000,
    },
    devtool: false,
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
});