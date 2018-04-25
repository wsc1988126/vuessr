// 此处是是vue-loader配置项
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,  //取消空格
    extractCSS: true // 设置css单独模板 显示模块的时候加载各自的
  }
}