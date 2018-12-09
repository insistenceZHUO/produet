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
            <router-link tag="li" to="silutionVideo">第一阶段</router-link>
            <router-link tag="li" to="silutionVideo">第二阶段</router-link>
           <router-link tag="li" to="silutionVideo">第三阶段</router-link>
            <router-link tag="li" to="silutionVideo">第四阶段</router-link>
            <router-link tag="li" to="silutionVideo">第五阶段</router-link>
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
        color:#FB6860;
        font-weight: bold;
        font-size: 0.38rem;
        text-align: center;
        line-height: 14vh;
        border-radius: 0.2rem;
    }
</style>

