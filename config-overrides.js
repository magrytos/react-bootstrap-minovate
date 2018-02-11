const path = require('path')

module.exports = function override(config, env) {
  config.module.rules[1].oneOf.splice(config.module.rules[1].oneOf.length - 1, 0, {
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [path.resolve(__dirname, './src/public/styles/vendor')],
        },
      },
    ],
  })
  // console.dir(config, { depth: 10, colors: true })
  return config
}
