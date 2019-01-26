const { environment } = require('@rails/webpacker')

environment.config.resolve.alias = {
  Shared: 'shared',
  SharedComponents: 'shared/components',
}

module.exports = environment
