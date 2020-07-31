let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList: ipUrl + 'getArticleList', // 首页文章列表接口
  getArticleById: ipUrl + 'getArticleById', // 文章详情接口
  getTypeInfo: ipUrl + 'getTypeInfo', // 获取类型
  getListById: ipUrl + 'getListById' // 获取类型下文章列表
}

export default servicePath