<template>
    <div class="silution">
        <div class="stata"></div>
        <div class="header">
            <router-link tag="div" to="/actionChart" class="header-black">
                <img src="./../../assets/home/back.png">
            </router-link>
        <div class="header-title">解决方案</div>
    </div>
    <div class="silution-item">
        <ul>
            <li><div>第一阶段</div></li>
            <li><div>第一阶段</div></li>
            <li><div>第一阶段</div></li>
            <li><div>第一阶段</div></li>
            <li><div>第一阶段</div></li>
        </ul>
    </div>
    </div>
</template>
<script>
    
</script>
<style>
    .silution{
        width: 100%;
        height: 100%;
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .silution>.stata{
        height:3.2vh;
        width: 100%;
    }
    .silution>.header{
        /* height: 100%; */
        width: 100%;
        position: relative;
        height: 7.4vh;
        display: flex;
        align-items: center;
        font-size:0.48rem;
        color:floralwhite;
        font-weight: 540;
    }
    .silution>.header>.header-black{
        width: 10vw;
        position: absolute;
        margin-left:5.3vw;
        height: 6vh;
    }
    .silution>.header>.header-black>img{
        width: 100%;
        height: 100%;
    }
    .header-title{
        margin: 0 auto;
    }
    .silution-item{
        width: 100%;
    }
    .silution-item>ul{
        width: 90%;
        margin: 0 auto;
    }
    .silution-item>ul>li{
        margin-top:2vh;
        width: 100%;
        height: 14vh;
        /* border: 1px solid #000; */
        background: #ffffff;
        font-weight: bold;
        font-size: 0.38rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.2rem;
    }
     .silution-item>ul>li>div{
         width: 43.7vw;
         height: 5.4vh;
         border-radius: 0.10rem;
         line-height: 5.4vh;
         background: #FB6860;
     }
</style>

