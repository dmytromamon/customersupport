const path = require('path')

const webpackConfig = {
    entry: "./src/js/index.js",

    output: {
        path: path.resolve(__dirname, './build/'),
        filename: "bundle.js",
        publicPath: "./js/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                options: {
                    compact: true
                }
            }
        ]
    },
    
    devServer: {
        port: 3000,
        open: true,
        proxy: {
          "/": {
            target:"http://localhost:3000"
          }
        },
        historyApiFallback: {
            index: '/'
        }
    },

    resolve: {
        modules: ['./src', './node_modules']
    },

    mode: "development",
    devtool: "source-map"
}

module.exports = webpackConfig