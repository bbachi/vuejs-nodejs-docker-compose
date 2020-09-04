module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://node-api:3080',
          changeOrigin: true
        },
      }
    }
  }