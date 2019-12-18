<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <div>{{"15631709035" | formatPhone}}</div>
    <div class="test">
      <p class="hello">Hello</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @comp is an alias to /src/components
import { HelloWorld } from '@comp'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    this.$api.user.login().then(res => {
      console.log('success==>', res)
    })
    this.$api.article.articleList().then(res => {
      console.log('success==>', res)
    })
  }
}
</script>
<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .test{
    width:750px;
    height:160px;
    background-color: bisque;
    text-align: center
  }

  .hello{
    color: $color-base ;
    font-size: 50px;
  }
</style>
