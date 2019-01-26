process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

const babelLoader = environment.loaders.get('babel')
babelLoader.enforce = 'post'

environment.loaders.append('haml', {
  test: /\.jsx$/,
  use: 'haml-jsx-loader',
  enforce: 'pre',
})
environment.loaders.append('eslint', {
  test: /\.(jsx|js)$/,
  use: {
    loader: 'eslint-loader',
    options: {
      failOnError: true,
    },
  },
  enforce: 'post',
})

module.exports = environment.toWebpackConfig()
