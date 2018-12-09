<template>
<div class="actionChart"> 
    <!--<v-chart :options="polar" @click="onClick"></v-chart>
<div style="color:#c23531;font-size:0.40rem;">{{desc}}</div>-->
<div>此页面需要修改暂时未写</div>
<router-link tag="div" to="/silution"  >点击跳转</router-link>
</div>

</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
  components: {
    'v-chart': ECharts
  },
 
  methods:{
      onClick(e){
          console.log(e)
         console.log(e.dataIndex)
         this.desc=this.value[e.dataIndex]
      }
  }
}
</script>
<style>
.actionChart{
        width: 100%;
        height: 100%;
        /* color:#d14a61; */
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
    }
.echarts{
  width: 100%;
  height: 100%;
}
</style>