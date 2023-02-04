import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'
import App from './App.vue'
import axios from 'axios'

Vue.use(ElementUI)


new Vue({
  el:"#app",
  router: router,
  render: h => h(App),
  components:{

  }
})
