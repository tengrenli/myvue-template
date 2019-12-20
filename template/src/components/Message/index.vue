<template>
  <transition name="fades">
    <div class="msg" v-if="Message.show">{{Message.txt}}</div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      Message: {
        txt: '', // 提示信息
        show: false // 是否显示
      }
    }
  },
  methods: {
    MsgFun (msg) { // 提示弹窗
      this.Message.txt = msg
      this.Message.show = true
      setTimeout(() => {
        this.Message.show = false
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
  .fades-enter-active, .fades-leave-active {
    transition: opacity .5s
  }
  .fades-enter, .fades-leave-active {
    opacity: 0
  }
  /*提示弹框*/
  .msg {
    position: fixed;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    background: rgba(0, 0, 0, .8);
    border-radius: 16px;
    color: #fff;
    font-size: 28px;
    z-index: 999999;
    max-width: 80%;
    height: auto;
    line-height: 60px;
    text-align: center;
  }
</style>
