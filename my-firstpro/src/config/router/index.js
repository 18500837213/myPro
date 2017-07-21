import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import content from '@/pages/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },{
    path: '/content',
    component: content
  },
  ]
})
