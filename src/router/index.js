import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import MainView from '@/views/MainView'
import Missing from '@/views/Missing'
import ElementStream from '@/views/ElementStream'
import ElementExpanded from '@/views/ElementExpanded'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'mainview',
          component: MainView,
          children: [
            {
              path: '',
              name: 'element_stream',
              component: ElementStream,
            },
            {
              path: ':id',
              name: 'element_expanded',
              component: ElementExpanded,
              props: true,
            },
          ],
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    {
      path: '*',
      name: 'missing',
      component: Missing,
    },
  ],
})
