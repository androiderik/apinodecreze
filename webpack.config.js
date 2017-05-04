var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        //'webpack-dev-server/client?http://127.0.0.1:8081/',
        //'webpack/hot/only-dev-server',
        'bootstrap-loader',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js', '.scss']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015','latest-minimal', 'react']
            }
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
            test: /\.css$/,
            loader:'style!css!'
        },
        {
            loader: 'json-loader',
            test: /\.json$/
        },
        
        {
            test: /\.scss$/,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        },
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url?limit=10000'
        },
        {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery'
        }
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
          })
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    },
    /*node: {
    net: "empty",
    tls: "empty",
    fs: "empty"
    }*/
      
}
