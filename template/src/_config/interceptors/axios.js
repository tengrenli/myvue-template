/**
 * 拦截器发起请求
 *
 * @export
 * @param {*} res
 * @returns
 */
export const requestSuccess = res => {
  return res
}

/**
 * 拦截器发起请求失败
 *
 * @export
 * @param {*} requestError
 * @returns
 */
export const requestFail = requestError => {
  // 自定义发送请求失败逻辑，断网，请求发送监控等

  return Promise.reject(requestError)
}

/**
 * 拦截器响应请求成功
 *
 * @export
 * @param {*} responseObj
 * @returns
 */
export const responseSuccess = responseObj => {
  return responseObj.data
}

/**
 * 拦截器响应请求失败
 *
 * @export
 * @param {*} responseError
 * @returns
 */
export const responseFail = responseError => {
  // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理

  return Promise.reject(responseError)
}
