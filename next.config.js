module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules\/(?!spitha)/,
        use: [
          options.defaultLoaders.babel,
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
      });
  
      return config;
    },
  };