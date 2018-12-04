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
}
html{
  font-size: 50px;
  /* overflow-y: scroll; */
}
html,body,#app{
  height: 100%;
}

/*外边距溢出*/
.margin:before{
    content: "";
    display:table;
    /*color:black;*/
    }
</style>
