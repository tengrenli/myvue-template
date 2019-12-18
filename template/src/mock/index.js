/**
 * 定义本地测试接口，最好与正式接口一致，尽可能减少联调阶段修改的工作量
 */
// 引入mockjs
import Mock from 'mockjs'
// 引入模板函数类
import user from './modules/user'
// import article from './modules/article'

const { mock } = Mock // Mock函数

// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据);
// import { user } from '@request/api/config.js'
mock(/\/user\/login/, 'get', user.login)
// mock(/\/users\/profile/, 'get', user.profile)
// mock(/\/users\/logout/, 'post', user.logout)

// mock(/\/user\/user/, 'get', user.profile)
