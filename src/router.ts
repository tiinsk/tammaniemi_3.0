import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import Register from './views/register.vue';
import Home from './views/home.vue';
import Create from './views/create.vue';
import Images from './views/images.vue';
import Infoposts from './views/infoposts.vue';
import Posts from './views/posts.vue';
import Reservations from './views/reservations.vue';
import Tasks from './views/tasks.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/infoposts',
      name: 'infoposts',
      component: Infoposts
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: Reservations
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ]
});
