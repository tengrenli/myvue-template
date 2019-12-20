import { get, post } from '@request/axios'

const user = params => get('user/users', params)
const userInfo = params => post('user/user', params)

export {
  user,
  userInfo
}
