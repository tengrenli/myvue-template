/*
* api接口的统一出口
* */

// 公用接口
import comm from './comm'

// 文章接口
import article from './article'

// 登录接口
import login from './login'

export default {
  comm,
  article,
  login
}
