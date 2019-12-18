/**
 * article模块接口列表
 */

// import base from '../base' // 导入接口域名列表
import axios from '@request/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const article = {
  // 新闻列表
  articleList () {
    console.log('访问了；；；')
    return axios.get(`/user/user`)
  },
  detail () {
    return axios.get(`user/user`)
  },
  // 新闻详情,演示
  articleDetail (id, params) {
    return axios.get(`/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return axios.post(`/accesstoken`)
  }
  // 其他接口…………
}

export default article
