/**
 * inject
 */
import api from '@request/api'
import axios from '@request/http'
import utils from '@utils'

export default {
  install: (Vue) => {
    Vue.prototype.$api = api
    Vue.prototype.$axios = axios
    Vue.prototype.$_ = utils._
    Vue.prototype.$utils = utils.lib
  }
}
