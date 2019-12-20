/**
 * inject
 */
import { instance } from '@request/axios'
import utils from '@utils'

export default {
  install: (Vue) => {
    Vue.prototype.$axios = instance // axios 实例
    Vue.prototype.$_ = utils._ // lodash
    Vue.prototype.$utils = utils.lib // 工具类方法
  }
}
