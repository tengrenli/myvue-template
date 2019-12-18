import { Random } from 'mockjs' // 导出随机函数

const articleDetail = () => {
  return {
    code: 200,
    data: {
      username: Random.cname(),
      age: Random.integer(10, 30),
      date: Random.date(),
      message: ''
    }
  }
}

export default {
  articleDetail
}
