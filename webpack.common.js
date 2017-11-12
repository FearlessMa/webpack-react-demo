const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry:{
        main:path.join(__dirname,'index.js')
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                   options:{
                       presets:[['es2015'],['react']]
                   }
                }
            },
            {
                test:/\.(scss|css)$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve:{
        extensions:['*','.js','.css','.scss']
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'plugin auto html',
            template:path.resolve(__dirname,'index.html')
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}

//abel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev