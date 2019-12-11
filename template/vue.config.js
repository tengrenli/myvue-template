const path = require('path')
const env = process.env.VUE_APP_ENV

module.exports = {
  chainWebpack: config => {
    // 关闭文件过大时产生的警告
    config.performance.set('hints', false)

    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })

    // 设置别名
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@view', path.resolve(__dirname, 'src/views'))
      .set('@conf', path.resolve(__dirname, 'src/_config'))
      .set('@img', path.resolve(__dirname, 'src/assets'))
      .set('@utils', path.resolve(__dirname, 'src/utils'))
      .set('@comp', path.resolve(__dirname, 'src/components'))

    config.externals({
      'wx': 'wx'
    })
  },
  // 第三方插件配置
  pluginOptions: {
    vconsole: {
      enable: env !== 'production'
    }
  }
}
