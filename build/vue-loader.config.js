const doscLoader = require.resolve('./doc-loader.js') // webpack加载loader是通过字符串的方式
// 此处是是vue-loader配置项
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,  //取消空格
    extractCSS: !isDev, // 设置css单独模板 显示模块的时候加载各自的
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]': '[hash:base64:5]',
      camelCase: true // 把css的变量名改成这种
    }
    // loaders: {
    //   "docs": doscLoader // 自定义loader
    //   // js: 'coffe-loader', // 指定vue中使用coffe-loader文件
    // }
    // preLoader: {} 指定前先解析一遍
  }
}