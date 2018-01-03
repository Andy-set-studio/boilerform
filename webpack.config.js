var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProduction = process.env.NODE_ENV === 'production';
var path = require('path');
var plugins = [];
var settings = {
    libraryName: 'boilerform',
    inputs: {
        js: {
            entryPath: '/assets/js/boilerform.js'
        }
    },
    outputs: {
        js: {
            fileName: 'boilerform.js',
            minFileName: 'boilerform.min.js',
            path: '/dist/js'
        },
        css: {
            path: '../css/boilerform.css'
        }
    }
};
var webpack = require('webpack');

if(isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
}

// Create an extract text plugin instance for Sass
var extractPlugin = new ExtractTextPlugin(settings.outputs.css.path);

plugins.push(extractPlugin);

module.exports = {
    entry: path.join(__dirname, settings.inputs.js.entryPath),
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, settings.outputs.js.path),
        filename: (isProduction ? settings.outputs.js.minFileName : settings.outputs.js.fileName),
        library: settings.libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: plugins
};