process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

environment.loaders.append('haml', {
  test: /\.jsx$/,
  use: 'haml-jsx-loader',
})

module.exports = environment.toWebpackConfig()
