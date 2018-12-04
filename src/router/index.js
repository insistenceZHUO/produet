import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from './../components/home.vue'
import SetStudents from './../components/user/setStudents.vue'
import SearchStudents from './../components/user/searchStudents.vue'
import SetStudentsInfo from './../components/user/setStudentsInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      component:Home
    },{
      path:'/setStudents',
      component:SetStudents
    },
    {
      path:'/searchStudents',
      component:SearchStudents
    },
    {
      path:'/setStudentsInfo',
      component:SetStudentsInfo
    }
  ]
})
