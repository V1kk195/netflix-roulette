const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dev"),
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true,
        open: true,
        watchFiles: ["src/**/*", "public/**/*"],
        port: 8000,
    },
    optimization: {
        runtimeChunk: "single",
    },
});
