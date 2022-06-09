const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i, // 1
                use: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },

            },
            {
                test: /\\.css$/, // 1
                use: ['style-loader', 'css-loader'], // 2
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]

    },
    // devServer: {
    //     allowedHosts: [
    //         'host.com',
    //         'subdomain.host.com',
    //         'subdomain2.host.com',
    //         'host2.com',
    //     ],
    // },
    plugins: [new HtmlWebpackPlugin()],
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        // Lossless optimization with custom option
                        // Feel free to experiment with options for better result for you
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            [
                                "svgo",
                                {
                                    plugins: extendDefaultPlugins([
                                        {
                                            name: "removeViewBox",
                                            active: false,
                                        },
                                        {
                                            name: "addAttributesToSVGElement",
                                            params: {
                                                attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                                            },
                                        },
                                    ]),
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
    },
};

const { resolve } = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    }
};
