module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.purs$/,
      //   loaders: ['purs-loader'],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.purs$/,
        use: [
          {
            loader: 'purs-loader',
            options: {
              src: [
                'bower_components/purescript-*/src/**/*.purs',
                'src/**/*.purs',
              ],
              // bundle: false,
              // psc: 'psa',
              // watch: isWebpackDevServer || isWatch,
              // pscIde: false,
            },
          },
        ],
      },
    ],
  },
};
