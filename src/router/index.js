import  '../static/js/vue-router.js' ;
import Login from "../views/login.js"
import Home from "../views/home.js"
import Layout from "../views/layout.js"

const routes = [
  {path: '/', redirect: "/home"},
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    children:[
      {
        path:'list',
        component:()=>import("../views/user/list.js")
      }
    ]
  },

  {path: '/login', component: Login},
  {path: '/home', component: Home}
]

const router = new VueRouter({
  mode:'hash',
  routes // (缩写) 相当于 routes: routes
})
console.log(router)
export default router
