const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        index: [path.join(__dirname, '/src/app/index.js')],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: buildPath,
        filename: 'app.js',
        chunkFilename: '[name].chunk.js' //异步模块文件
    },
    devServer: {
        contentBase: 'src/static',
        inline: true,
        //host: 'localhost',
        port: 3232,
        host:'0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    publicPath: "/dist"
                })
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        // Enables Hot Modules Replacement
        //new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        //new webpack.NoErrorsPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            { from: 'static' },
        ], path.resolve(__dirname, 'src')),
        //独立打包样式
         new ExtractTextPlugin({
            filename: "style.css",
            disable: false,
            allChunks: true,
        }),
        //独立打包第三方文件
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
    ],

}

module.exports = config;