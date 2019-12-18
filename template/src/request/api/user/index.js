/**
 * user模块接口列表
 */

// import base from '../base' // 导入接口域名列表
import axios from '@request/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块
import { USER } from '../config'
console.log(USER)
const user = {
  login () {
    console.log('访问了user=login；；；')
    return axios.get(`${USER.login}`)
  },
  user () {
    console.log('访问了user=user；；；')
    return axios.get(`${USER.user}`)
  }
}

export default user
