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
    // Render source-map file for final build
    devtool: 'source-map',
    // output config
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js', // Name of output file
        chunkFilename: '[name]/[name].js' //异步模块文件
    },
    module: {
        rules: [
            {
                test: /.css$/,
                //loader: ExtractTextPlugin.extract("style-loader", "css-loader", { publicPath: "/dist" })
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            }
        ],
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            },
            sourceMap: true
        }),
        // Allows error warnings but does not stop compiling.
        new webpack.NoEmitOnErrorsPlugin(),
        // Transfer Files
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
};

module.exports = config;
