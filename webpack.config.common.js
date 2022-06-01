const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.tsx",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset",
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "./src"), "node_modules"],
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Netflix Roulette",
            template: "./public/index.html",
            filename: "index.html",
        }),
    ],
};
