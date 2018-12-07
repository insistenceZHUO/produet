<template>
<div class="actionChart"> 
    <v-chart :options="polar" @click="onClick"></v-chart>
<div style="color:#c23531;font-size:0.40rem;">{{desc}}</div>
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
  data () {
    return {
        desc:'',
        value:[
            "第一天第一天第一天第一天第一天第一天第一天第一天第三天第三天第三天",
            "第二天第二天第二天第二天第二天第二天第二天第二天第三天第三天第三天第三天",
            "第三天第三天第三天第三天第三天第三天第三天第三天第三天第三天天第三天第三天第三天第三天第三天",
            "第四天第三天第三天第三天第三天第三天第三天第三天第三天第三天天第三天第三天第三天第三天第三天",
            "第五天第三天第三天第三天第三天第三天第三天第三天第三天第三天天第三天第三天第三天第三天第三天",
        ],
        
      polar: {
        //   color: ['#8EC9EB'],
            title: {
        text: '标签讲解',//图标标题
        x: 'center'//水平居中
    },
    tooltip: {//提示框信息
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {//图例信息
        data:[ 'A','B','C'],
        top:40//图例位置（可设置top,bottom,left,right）
    },
    grid: {//图的位置
        top: 100,
        bottom: 50
    },
    xAxis: [  //x坐标轴信息    
        {
           name : '（下方x轴数据单位）',//坐标单位
           data: [ "week1", "week2", "week3", "week4"],//坐标上数值
            axisTick:{
           show:false,
       },
    //    offset:0,
         axisLabel: {
            //  formatter:'{value} kg',
            // min: 1,
            // max:5,
            color:"#fff"
            // show:false
        },
        },
    //    lineStyle: {
    //        color:'#000'
    //    }
    ],
    
    yAxis: [//y坐标轴信息
        {
            // name : '（y轴数据单位）',//坐标单位
            type: 'value',
            // 控制轴线文字
        axisLabel: {
            formatter: function(value,index){
                console.log(value)
                console.log(index)
                let Yindex=index+1
                 return 'Lv'+''+''+Yindex;
            },
            //  formatter:'{value} kg',
            // min: 1,
            // max:5,
            color:"#fff"
            // show:false
        },
        // 图表横线的样式
        splitArea:{
            interval:0,
            show:false
        },
        // 控制图标的刻度
       axisTick:{
           show:false,
       },
    //    控制图标的对准基线
       splitLine:{
           show:false,  
       },
       axisPointer:{
           type:'line',
           show:true,
           label:{
            //    show:false,
           }
       },
        boundaryGap: true,
        // data:  ['0', '10', '20', '30', '40', '50', '60', '70', '80'
        // ],
        },
           
    ],
    // color:'#2f4554',
    series: [
        {//A曲线
            x: 0,
            y: 0,
            name:'A',
            type:'line',
            itemStyle:{
                normal:{ color: "#d14a61" } //坐标圆点的颜色
            }, 
            lineStyle:{ 
                normal:{ width:4,color: "#d14a61"  }//线条的颜色及宽度
            },
            // symbolOffset:[0, '100%'],
            // symbolOffset:[0, '100%'],
            label: {//线条上的数字提示信息
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            smooth: true,
            //线条平滑
            // symbolSize:
            data:[0,53.2,126,142],
            // zlevel:0,
        },
        // {
        //     name:'B',
        //     type:'line',
        //     itemStyle:{ 
        //         normal:{ color: "#5793f3" } 
        //     }, 
        //     lineStyle:{ 
        //         normal:{width:4, color: "#5793f3"  } 
        //     },
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'bottom'
        //         }
        //     },
        //     smooth: true,
        //     data: [1074,1448,1125,1570]
        // },{
        //     name:'C',
        //     type:'line',
        //     xAxisIndex: 1,
        //     itemStyle:{ 
        //         normal:{ color: "#675bba" } 
        //     }, 
        //     lineStyle:{ 
        //         normal:{width:4, color: "#675bba"  } 
        //     },
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'bottom'
        //         }
        //     },
        //     smooth: true,
        //     data: [887,997,854,711]
        // }
    ]

    //     xAxis: {
    //     type: 'category',
    //     // show:false,
    //     data: ['week1', 'week2', 'Week3', 'week4', 'week5', 'week6', 'week7']
    // },
    // grid:{
    //     show:false,
    //     left:"left",
    //     borderColor:"#000",
    //     backgroundColor:"#fff"
    // },
    // yAxis: {
    //     type: 'value',
    //     // show:false,
    //     data: ['lv1', 'lv2', 'lv3', 'lv4', 'lv5', 'lv6', 'lv7'],

    // },

    // legend:{
    //     left:'center',
    //     show: true,
    //         data: [{name: '系列1',icon: 'circle', textStyle: {color: '#000'}}],
    // // 强制设置图形为圆。// 设置文本为红色
    //     // shadowColor:000,
    // },
    // series: [{
    //     data: [11111, 932, 901, 934, 1290, 1330, 1320],
    //     type: 'line',
         
    //  }]
     }
    }
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