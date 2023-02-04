import VueRouter from "vue-router";
import Vue from "vue";
import home from "../components/home.vue";
import search from "../components/search.vue";
import tpa from "../components/tpa.vue";
import download from '../components/download.vue';
import browse from '../components/browse.vue';
import search_gc from '../components/search_gc.vue'
import search_isoid from '../components/search_isoid.vue'
Vue.use(VueRouter);

  const routes=[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/search',children:[
        {path:'/search/search_gc',component:search_gc}, 
        {path:'/search/search_isoid',component:search_isoid}
    ],component:search},
    {path:'/tpa',component:tpa},
    {path:'/browse',component:browse},
    {path:'/download',component:download},
    
   
  ]
  
  
  const router = new VueRouter({
    routes: routes
  })
  export default router