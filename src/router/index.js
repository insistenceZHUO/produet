import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from './../components/home.vue'
import SetStudents from './../components/user/setStudents.vue'
import SearchStudents from './../components/user/searchStudents.vue'
import SetStudentsInfo from './../components/user/setStudentsInfo.vue'
import TestAction from './../components/user/testAction.vue'
import ActionDesc from './../components/action/actionDesc'
import ActionList from './../components/action/actionList'
import ActionInfo from './../components/action/actionInfo'
import Silution from './../components/solution/silution'
import SilutionVideo from './../components/solution/silutionVideo'


Vue.use(Router)

export default new Router({
  routes: [
    // 用户信息设置
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
    },
    // 康复动作
    {
      path:'/testAction',
      component:TestAction
    },
    {
      path: '/actionDesc',
      // name: 'HelloWorld',
      component: ActionDesc
    },
    {
      path: '/actionList',
      // name: 'HelloWorld',
      component: ActionList
    },
    {
      path: '/actionInfo',
      // name: 'HelloWorld',
      component: ActionInfo
    },
    // 解决方案
    {
      path: '/silution',
      // name: 'HelloWorld',
      component: Silution
    },
    {
      path:'/silutionVideo',
      component:SilutionVideo
    }
  ]
})
