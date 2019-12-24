import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
  import('./views/Home/Home.vue')
const PageOne = () =>
  import('./views/PageOne/PageOne.vue')
const Homet = () =>
  import('./views/Homet/Homet.vue')
const Invoice = () =>
  import('./views/Invoice/Invoice.vue')
const Chuku = () =>
  import('./views/Chuku/Chuku.vue')
const KuaiDi = () =>
  import('./views/KuaiDi/KuaiDi.vue')

Vue.use(Router)
const routes = [{
  path: '/',
  redirect: '/PageOne'
},
{
  path: '/PageOne',
  name: 'PageOne',
  component: PageOne
},
{
  path: '/home',
  name: 'home',
  component: Home
},
{
  path: '/homet:num',
  name: 'homet',
  component: Homet
},
{
  path: '/invoice:num',
  name: 'invoice',
  component: Invoice
},
{
  path: '/chuku',
  name: 'chuku',
  component: Chuku
},
{
  path: '/kuaidi',
  name: 'kuaidi',
  component: KuaiDi
},
]
export default new Router({
  mode: 'history',
  routes
})