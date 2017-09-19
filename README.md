# react-app-rewire-appcache-plugin

Add [`appcache-webpack-plugin`](https://github.com/lettertwo/appcache-webpack-plugin) to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
// Generate a manifest.appcache file
config = rewireAppcachePlugin(config, env, {
  settings: ['prefer-online'],
  output: 'manifest.appcache'
})
```
