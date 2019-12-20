<template>
  <div class="home">
    Home Page
    <timer time="172800"/>
  </div>
</template>

<script>
import { user, userInfo } from '../../request/api/user'
// or import { user } from '@request/api/user'
// import { get } from '@request'
import { Timer } from '@comp'
export default {
  name: 'home',
  components: {
    Timer
  },
  mounted () {
    /**
    * 使用全局实例res
    * */
    this.$axios.get('user/user').then(res => {
      console.log('全局方法调用：：：', res)
    })
    /**
    * 使用自定义方法
    * */
    user().then(res => {
      console.log('自定义get：：：', res)
    })

    userInfo({ id: 123 }).then(res => {
      console.log('自定义post:::', res)
    })
  }
}
</script>
<style lang="scss"  scoped>
  div {
    color: $color-grey-dim;
  }
</style>
