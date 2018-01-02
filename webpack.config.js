var isProduction = process.env.NODE_ENV === 'production';
var webpack = require('webpack');
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
        }
    }
};

if(isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
}

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
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: plugins
};