import "./static/js/vue.js"
import router from "./router/index.js"
import "https://unpkg.com/element-ui/lib/index.js"
import * as components from "./components/index.js"

Object.keys(components).forEach(item=>{
  Vue.component(components[item].name,components[item])
})
const app = new Vue({
  router
}).$mount('#app')
