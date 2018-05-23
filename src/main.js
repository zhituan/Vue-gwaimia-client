import Vue from  'vue'
import {Button} from 'mint-ui'//引入
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import './filters'
import loading from './common/loading.gif'
//注册全局组件标签
Vue.component(Button.name, Button)
Vue.use(VueLazyload,{//内部自定义一个指令
  loading
})
new Vue({
  el:'#app',
  render: h => h(App),
  router,//映射路由
  store
})
