<template>
  <i class="timer">
    <span></span>
    {{this.day}}<span>天</span>{{this.hour}}<span>时</span>{{this.mini}}<span>分</span>{{second}}<span>秒</span>
  </i>
</template>

<script>
export default {
  name: 'Timer',
  props: ['time'], // 接收 时间为秒
  data () {
    return {
      timer: null,
      myTime: 0,
      markTime: null,
      hasCallBack: false,
      hour: null,
      mini: null,
      second: null,
      day: null
    }
  },
  components: {},
  mounted () {
    if (this.time) {
      this.myTime = this.time
      this.setText(this.myTime)
      this.start()
    } else {
      this.setZero()
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  methods: {
    start () {
      let _this = this
      if (this.myTime <= 0) {
        // this.msg = '00:00'
        this.setZero()
        clearTimeout(this.timer)
        this.timer = null
        if (!this.hasCallBack) {
          this.hasCallBack = true
          this.$emit('callback')
        }
      } else {
        this.myTime--
        this.setText(this.myTime)
        this.timer = setTimeout(() => {
          let now = Date.now()
          if (_this.markTime) { // 兼容手机后台运行定时器停止
            let d = (now - _this.markTime) / 1000
            if (d > 2) {
              _this.myTime = _this.myTime - d
            }
          }
          _this.markTime = now
          _this.start()
        }, 1000)
      }
    },
    zero: function (n) { // 补0
      let parse = parseInt(n, 10)
      if (parse > 0) {
        if (parse <= 9) {
          parse = '0' + parse
        }
        return String(parse)
      } else {
        return '00'
      }
    },
    setText (time) {
      let hour, mini, sec, day
      //  year, month, day
      if (time > 0) {
        sec = this.zero(time % 60)
        mini = Math.floor((time / 60)) > 0 ? this.zero(Math.floor((time / 60)) % 60) : '00'
        hour = Math.floor((time / 3600)) > 0 ? this.zero(Math.floor((time / 3600)) % 24) : '00'
        day = Math.floor((time / 86400)) > 0 ? this.zero(Math.floor((time / 86400)) % 30) : '00'
        // 月份，以实际平均每月秒数计算
        // month = Math.floor((time / 2629744)) > 0 ? this.zero(Math.floor((time / 2629744)) % 12) : '00'
        // 年份，setText按回归年365天5时48分46秒算
        // year = Math.floor((time / 31556926)) > 0 ? Math.floor((time / 31556926)) : '0'
        // if (day > 0) {
        //   return `<span class="day">${day}</span>天<span>${hour}</span>时<span>${mini}</span>分<span>${sec}</span>秒`
        // }
        // if (hour > 0) {
        //   return `${hour}时${mini}分${sec}秒`
        // }
        // return `${mini}分${sec}秒`
        this.day = day
        this.hour = hour
        this.mini = mini
        this.second = sec
      } else {
        this.setZero()
        // return '00:00'
      }
    }
  },
  method: {
    setZero () {
      this.hour = '00'
      this.second = '00'
      this.mini = '00'
      this.day = '00'
    }
  }
}
</script>

<style  lang="scss">
  .timer{
    display: inline-block;
    /*width:rem(32);*/
    height: auto;
    span {
      background: #333;
      color: #fff;
      display: inline-block;
      padding: 3px 5px;
    }
  }

</style>
