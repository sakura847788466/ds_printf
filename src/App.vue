<template>
  <div id="app">
    <Header></Header>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  name: "App",
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  components: { Header },
  props: {}

}
</script>

<style>
#app {
  min-height: 100%;
  height: auto;
  background-color: #e3f1ed;
  font-size: 14px;
}
</style>