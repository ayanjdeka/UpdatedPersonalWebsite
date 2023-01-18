const path = require('path');
const HWP = require('html-webpack-plugin'); 
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        },
        {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ]

    },
    plugins:[
        new HWP({template: path.join(__dirname,'/src/index.html')})
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}