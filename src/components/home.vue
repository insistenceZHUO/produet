<template>
  <div class="home">
    <div class="img">
        <img src="./../assets/home/home2.png">
    </div>
    <div class="url">
        <router-link tag="span" to="/setStudents">答案点这里</router-link> 
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
    .home{
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url("./../assets/home/home.png");
        background-size: 100% 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .home>.img{
        position: absolute;;
        width: 100%;
        height: 100%;
    }
     .home>.img>img{
         width: 100%;
         height: 100%;
     }
     .home>.url{
         position: absolute;
         bottom: 0.7rem;
         border:2px solid #ffffff;
         color: #ffffff;
         width: 50vw;
         font-family: "zhonghei";
         /* font-weight: bold; */
         line-height:8.2vh;
         font-size:0.54rem;
         height: 8.2vh;
     }
</style>