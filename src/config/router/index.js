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
    path: '/content',
    component: content
  },{
    path: '/discovery',
    component: discovery
  },
  ]
})
