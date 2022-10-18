
import request from '../utile/request.js'

// 登录管理接口   /lejuAdmin/index/login
function login(data) {
  return request({
    url: '/lejuAdmin/index/login',
    method: 'post',
    data
  })
}

// 获取文章列表数据接口  /lejuAdmin/productArticle/findArticles
function findArticles(start, limit, data) {
  return request({
    url: `/lejuAdmin/productArticle/findArticles/${start}/${limit}`,
    method: 'post',
    data
  })
}

// 新增文章接口  /lejuAdmin/productArticle/addArticle
function addArticle(data) {
  return request({
    url: '/lejuAdmin/productArticle/addArticle',
    method: 'post',
    data
  })
}

// 更新文章显示状态  /lejuAdmin/productArticle/changeShowStatus
function changeShowStatus(data) {
  return request({
    url: '/lejuAdmin/productArticle/changeShowStatus',
    method: 'post',
    data
  })
}

// 删除文章接口  /lejuAdmin/productArticle/del
function del(id) {
  return request({
    url: `/lejuAdmin/productArticle/del/${id}`,
    method: 'DELETE'
  })
}

export {
  login,findArticles,addArticle,changeShowStatus,del
}
