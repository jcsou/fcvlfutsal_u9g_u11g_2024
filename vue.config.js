const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/fcvlfutsal_u9g_u11g_2024/dist/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ]
})
