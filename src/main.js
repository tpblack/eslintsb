import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 使用elements-ui
// 引入elementui的css库
// 这是es6的引入方法 如果没有返回值 就直接引入 则代表引入整个文件
import 'element-ui/lib/theme-chalk/index.css'
// 引入elementui的组件库
import elementUi from 'element-ui'
// 导入axios
import Axios from 'axios';
// 配置axios的默认请求地址
Axios.defaults.baseURL = 'http://172.16.14.127:3000/'
// 配置axios每次发送请求都携带sessionID值
Axios.defaults.withCredentials = true
// vue.use 方法代表设置vue的全局组件  以便每次使用对应的组件 以便不需要第二次引入
// 把elementUi的组件 引入到vue中 使其变成全局组件
Vue.use(elementUi);

// console.log(111)
Vue.config.productionTip = false;
// 将axios挂载到vue实例上
Vue.prototype.$api = Axios;

new Vue({
  // 将router 路由的配置注册到vue实例
  router,
  store, // 将vuex的配置注册到vue实例
  render: h => h(App) // 将视图渲染到vue实例
}).$mount('#app')// 将#app的dom绑定给vue实例
