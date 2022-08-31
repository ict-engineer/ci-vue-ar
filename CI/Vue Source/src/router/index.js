import Vue from 'vue';
import Router from 'vue-router'
import VueCookies from 'vue-cookies'


Vue.use(VueCookies)
Vue.use(Router)
const routeDef = [
  { name: '', path: '/', componentName: 'login' },
  { name: 'projects', path: '/projects', componentName: 'projects' },
  { name: 'build', path: '/build', componentName: 'build' },
  { name: 'viewer', path: '/viewer', componentName: 'viewer' },
  { name: 'login', path: '/login', componentName: 'login' },
  { name: 'register', path: '/register', componentName: 'register' },
  { name: 'publish', path: '/publish', componentName: 'publish' }

]

// we can create routes like this
const routes = routeDef.map(function(def) {
  return {
    name: def.name,
    path: def.path,
    component: () => import('../views/' + def.componentName + '.vue')
  }
})


let router =  new Router({
  mode:'history',
  routes: routes,

})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login',"/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = $cookies.get("user");


  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router
