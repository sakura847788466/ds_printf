<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  name: "App",
  data () {
    return {}
  },
  methods: {},
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