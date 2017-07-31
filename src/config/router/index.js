import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import content from '@/pages/content'
import discovery from '@/pages/discovery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: discovery
    },{
    path: '/shelf',
    component: content
  },{
    path: '/thoughts',
    component: index
  },{
    path: '/discovery',
    component: discovery
  },{
    path: '/person',
    component: discovery
  }
  ]
})
