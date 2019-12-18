/**
 * inject
 */
import api from '@request/api'
import utils from '@utils'

export default {
  install: (Vue) => {
    Vue.prototype.$api = api
    Vue.prototype.$_ = utils._
    Vue.prototype.$utils = utils.lib
  }
}
