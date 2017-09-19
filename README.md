# react-app-rewire-appcache-plugin

Add [`appcache-webpack-plugin-plus`](https://github.com/lwd-technology/appcache-webpack-plugin-plus) to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
const rewireAppcachePlugin = require('react-app-rewire-appcache-plugin')

// Generate a manifest.appcache file
config = rewireAppcachePlugin(config, env, {
  settings: ['prefer-online'],
  output: 'manifest.appcache'
})
```
