const { WorkboxWebpackPlugin } = require('workbox-webpack-plugin')

module.exports = {
  webpack: {
    plugins: [
      new WorkboxWebpackPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      })
    ]
  }
}
