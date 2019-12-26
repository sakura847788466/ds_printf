<template>
  <div id="page_end_html">
    <!-- 圆圈特效-->
    <div id="circle"></div>
    <div id="circle1"></div>
    <div id="circletext"
         style="text-align: center;"
         @click="back">点击<br>返回首页</div>

  </div>
</template>

<script>
export default {
  name: 'Circlet',
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/pageone'
      })
    }
  }
}
</script>

<style scoped>
#circle {
  border: 5px solid rgba(247, 14, 42, 1);
  opacity: 0.9;
  border-right: 5px solid rgba(0, 0, 0, 0);
  border-left: 5px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  box-shadow: 0 0 35px #808080;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  position: fixed;
  left: 7px;
  bottom: 50px;
  animation: spinPulse 10s infinite linear;
}

#circle1 {
  background-color: rgba(0, 0, 0, 0);
  border: 6px solid rgba(31, 62, 230, 0.9);
  opacity: 0.9;
  border-left: 6px solid rgba(0, 0, 0, 0);
  border-right: 6px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  box-shadow: 0 0 15px #202020;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  position: fixed;
  left: 15px;
  bottom: 59px;
  animation: spinoffPulse 20s infinite linear;
}

#circletext {
  font-weight: bold;
  color: #808080;
  text-align: center;
  font-size: 12px;
  width: 51px;
  height: 30px;
  line-height: 15px;
  margin: 0 auto;
  position: fixed;
  left: 20px;
  bottom: 77px;
}

@keyframes spinPulse {
  0% {
    transform: rotate(160deg);
    opacity: 0.5;
    box-shadow: 0 0 1px #505050;
  }

  50% {
    transform: rotate(100deg);
    opacity: 1;
  }

  100% {
    transform: rotate(-320deg);
    opacity: 0.5;
  }
}

@keyframes spinoffPulse {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>