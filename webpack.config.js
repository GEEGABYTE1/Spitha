const path = require('path');

module.exports = {
  entry: './src/index.ts', 
  module: {
    rules: [
      {
        test: /\.ts$|tsx/, 
        use: 'ts-loader', 
        //exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
};