module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: [
          options.defaultLoaders.babel,
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
      });
  
      return config;
    },
  };