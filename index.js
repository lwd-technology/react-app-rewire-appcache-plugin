const AppcachePlugin = require('appcache-webpack-plugin-plus')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireAppcachePlugin(config, env, appcachePluginOptions = {}) {
  // Add the Appcache plugin to the list of plugins
  config.plugins = (config.plugins || []).concat([
    new AppcachePlugin(appcachePluginOptions)
  ])

  return config
}

module.exports = rewireAppcachePlugin
