import Vue from 'vue'
import Router from 'vue-router'
import thoughts from '@/pages/thoughts'
import shelf from '@/pages/shelf'
import discovery from '@/pages/discovery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: discovery
    },{
    path: '/shelf',
    component: shelf
  },{
    path: '/thoughts',
    component: thoughts
  }
  ]
})
