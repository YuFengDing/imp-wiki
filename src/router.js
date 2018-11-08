import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [
  //   {
  //   path: '/login',
  //   name: 'Login',
  //   component: resolve => require(['@/components/index/Login'], resolve)
  // },
  {
    path: '/',
    name: 'Home',
    // redirect: () => {
    //   return '/ArticleList'
    // },
    component: resolve => require(['@/components/home/section/home'], resolve),
    // children: [{
    //   path: 'ArticleList',
    //   component: resolve => require(['@/components/index/ArticleList'], resolve)
    // }, {
    //   path: 'Contact',
    //   component: resolve => require(['@/components/index/Contact'], resolve)
    // }, {
    //   path: 'Tags',
    //   component: resolve => require(['@/components/index/Tags'], resolve)
    // }, {
    //   path: 'Article',
    //   component: resolve => require(['@/components/index/Article'], resolve)
    // }]
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: resolve => require(['@/components/admin/EditPage'], resolve)
  }
  ]
})
export default router
