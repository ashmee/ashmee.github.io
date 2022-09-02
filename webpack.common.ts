const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isProductionMode = process.env.NODE_ENV === "production"

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "./public/index.html"),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public/images"),
                    to: ".",
                }

            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isProductionMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: !isProductionMode,
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "./docs"),
        clean: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    },
    devtool: isProductionMode ? "" : "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "./docs"),
        },
        hot: true,
        compress: true,
        port: 9000,
    },
}
