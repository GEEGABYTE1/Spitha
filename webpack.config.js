const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
        {
            test: /\.m?ts$|\.tsx?$/,
            // exclude: /node_modules/,
            use: {
                loader: "ts-loader",
                options: {
                    onlyCompileBundledFiles: true,
                }
            },
        },,
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};