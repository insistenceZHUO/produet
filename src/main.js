// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import './assets/font_957725_cu2wm496cz5/iconfont.css'

Vue.config.productionTip = false
Vue.component('v-chart', ECharts)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
