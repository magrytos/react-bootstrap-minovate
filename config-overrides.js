const path = require('path')

const dupa = path.resolve(__dirname, './src/styles/mixins.scss')
console.log(dupa)
module.exports = function override(config, env) {
  config.module.rules[1].oneOf.splice(config.module.rules[1].oneOf.length - 1, 0, {
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [path.resolve(__dirname, './src/public/styles')],
        },
      },
    ],
  })
  // console.dir(config, { depth: 10, colors: true })
  return config
}
