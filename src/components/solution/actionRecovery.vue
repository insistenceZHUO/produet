<template>
    <div class="actionRecovery">
         <div class="stata"></div>
        <div class="header">
            <div class="header-black">
                <img src="./../../assets/home/back.png">
            </div>
        <div class="header-title">第一节<i> ：</i>腰背部分</div>
        <div class="header-home"><img src="./../../assets/solutionAction/right.png"></div>
        <div class="banner">
            <img src="">
        </div>
    </div>
</div>
</template>
<script>
    export default{
    }
</script>
<style>
    .actionRecovery{
        width: 100%;
        height: 100%;
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
        /* background-repeat: repeat; */
    }
    .actionRecovery>.stata{
        height:3.2vh;
        width: 100%;
    }
    .actionRecovery>.header{
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
    .actionRecovery>.header>.header-black{
        width: 10vw;
        position: absolute;
        margin-left:5.3vw;
        height: 6vh;
    }
    .actionRecovery>.header>.header-black>img{
        width: 100%;
        height: 100%;
    }
       .actionRecovery>.header>.header-home{
        width: 10vw;
        position: absolute;
        right:5.3vw;
        height: 6vh;
    }
    .actionRecovery>.header>.header-home>img{
        width: 100%;
        height: 100%;
    }
    .header-title{
        margin: 0 auto;
    }
    .header-home{
        width: 90%;
        height: 30vh;
    }
</style>

