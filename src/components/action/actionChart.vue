<template>
    <div>
        <div>中国人</div>
        <ve-line :data="chartData"></ve-line>
    </div>
</template>
<script>
import VeLine from 'v-charts/lib/line.common'
    export default{
data () {
    return {
      chartData: {
        columns: ['date', 'PV'],
        rows: [
          { 'date': '01-01', 'PV': 0 },
          { 'date': '01-02', 'PV': 3000 },
          { 'date': '01-03', 'PV': 4000 },
          { 'date': '01-04', 'PV': 5000 },
        ]
      }
    }
  },
        components:{
            VeLine
        }
        }
</script>
<style scoped>

</style>

