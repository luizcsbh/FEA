const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// requires omitidos
module.exports = {
 entry: path.join(__dirname, 'src/index.jsx'),
 output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
 },

 // propriedades entry e output omitidas
resolve: {
    extensions: [".js", ".jsx"]
},
module: {
    rules: [
        {
            test: /.jsx?$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }

                }
            ]
        },
        {
            test: /\.(jpe?g|ico|png|gif|svg)$/i,
            loader: 'file-loader?name=img/[name].[ext]'
        }
    ]
},

plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    })
],

devServer: {
    publicPath: "/",
    contentBase: "./dist"
}
   
};