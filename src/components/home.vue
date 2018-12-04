<template>
  <div class="home">
    <div class="img">
        <img src="./../assets/home/home2.png">
    </div>
    <div class="url">
        答案点这里
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
         width: 2.2rem;
         line-height: 0.4rem;
         height: 0.4rem;
     }
</style>