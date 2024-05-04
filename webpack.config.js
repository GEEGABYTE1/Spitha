const path = require('path');

module.exports = {
  entry: './src/index.ts', 
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: 'ts-loader', 
        exclude: /node_modules\/(?!spitha)/,
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