const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  watch:true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module:{
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.png$/i,
            type: 'asset/resource'
        },
        {
            test:/\.jpg$/i,
            type:'asset/resource'
        }
    ]
  }
  
};