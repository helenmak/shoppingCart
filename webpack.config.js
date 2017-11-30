const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = (env)=>{
	 const  host = 'localhost', //для WDS
			port = process.env.port,
			outputDir = env ? env.output : 'dist';//для WDS
	
    return {
		
	context: path.join(__dirname, './src'),
    entry: [
        `webpack-dev-server/client?http://${host}:3000`, // TODO: заменить потом на переменную port. Почему-то не видит порт здесь.
        'webpack/hot/only-dev-server', 
        //'react-hot-loader/patch', 
        './app'
    ],
    resolve: { 
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './src'),
        hot: true,
        port: port,
        host: host
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outputDir)
    },

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]-[local]'
                        }
                    },
                    {loader: 'postcss-loader', 
                        options: {
                            plugins: 
                                [require('autoprefixer')({ 
                                    browsers: ['last 2 versions'] 
                                })] 
                            }
                        },
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: [ "es2015", "react"],
                    plugins: [require("babel-plugin-transform-object-rest-spread"), 'react-hot-loader/babel']
                }
                //,{loader: 'react-hot-loader'}],
            },
            {
                test: /\.(svg|ttf)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/[name]-[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href'],
                        modules: true
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|tiff|webp|ico)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 10,
                        name: 'assets/[hash:6]/[hash].[ext]'
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
        new HtmlWebpackPlugin({
            template: path.resolve('./src', './index.html'),
            inject: true
        }),
    ]
	
}
};

module.exports = config;