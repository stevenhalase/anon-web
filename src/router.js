import Vue from 'vue';
import Router from 'vue-router';
import Boards from './views/Boards.vue';
import Board from './views/Board.vue';
import Thread from './views/Thread.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'boards',
      component: Boards
    },
    {
      path: '/board',
      name: 'board',
      component: Board,
      props: route => ({ board: route.query.b})
    },
    {
      path: '/thread',
      name: 'thread',
      component: Thread,
      props: route => ({ board: route.query.b, threadNumber: route.query.t.toString()})
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
