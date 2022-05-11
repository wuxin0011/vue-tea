import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 引入bootstrap图标 */
// https://icons.getbootstrap.com/

// 样式清除
import './assets/css/reset.css'
// 首页样式
import './assets/css/index.css'


/* 全部异常捕获 */
Vue.config.warnHandler = function (msg, vm, trace) {
  console.info(msg,vm,trace)
}

/* 全局错误捕获 */
Vue.config.errorHandler = function (err, vm, info) {
  console.info(err,vm,info)
}



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");