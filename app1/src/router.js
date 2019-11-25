import Router from 'vue-router'
import Vue from 'vue';
const Home = ()=>import('./views/Home.vue');
const Test = ()=>import('./views/Test.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app1',
      name: 'home',
      component: Home
    },
    {
      path:'/app1/test',
      name:'test',
      component:Test
    }
  ]
})
