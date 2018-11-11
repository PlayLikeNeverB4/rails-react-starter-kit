process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.loaders.append('eslint', {
  test: /\.(jsx|js)$/,
  use: {
    loader: 'eslint-loader',
    options: {
      failOnError: true,
    },
  },
  enforce: 'pre',
})
environment.loaders.append('haml', {
  test: /\.jsx$/,
  use: 'haml-jsx-loader',
  enforce: 'pre',
})

module.exports = environment.toWebpackConfig()
