const { environment } = require('@rails/webpacker')

environment.config.resolve.alias = {
  Shared: 'shared',
  SharedComponents: 'shared/components',
}

environment.loaders.delete('nodeModules')

module.exports = environment
