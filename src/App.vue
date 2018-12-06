<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  /* font-family: 'zhonghei'; */
}
html{
  font-size: 50px;
}
html,body,#app{
  height: 100%;
  
}
@font-face {  
  font-family: 'dahei';
  src: url('./assets/font/DaHei.ttf');
}
@font-face {  
  font-family: 'zhongcuhei';
  src: url('./assets/font/zhongcuhei.ttf');
}
@font-face {  
  font-family: 'hei';
  src: url('./assets/font/Hei.ttf');
}
@font-face {  
  font-family: 'zhonghei';
  src: url('./assets/font/ZhongHe.ttf');
}
/*外边距溢出*/
.margin:before{
    content: "";
    display:table;
    /*color:black;*/
    }
    .fl{
        float: left;
    }
    .fr{
        float:right;
    }
        /* 清除浮动 */
    .clearfix:after{
        content:"";      
        display:block;             
        clear:both;             
    }
</style>
