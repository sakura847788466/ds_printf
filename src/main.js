import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/dragresize.js'
import router from './router'
import './directives'
import './style/reset.less'

// 图像指令
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
