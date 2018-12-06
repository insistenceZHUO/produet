<template>
    <div class="actionList">
        <div class="stata"></div>
        <div class="header">
            <div class="header-black">
                <img src="./../../assets/home/back.png">
            </div>
            <div class="header-title">评估</div>
        </div>
        <div class="action-list">
            <ul class="clearfix">
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
                <li>
                    <div><img src="./../../assets/solutionAction/video.png"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .actionList{
        width: 100%;
        height: auto;
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
        font-size:0.36rem;
        font-family: "dahei";
        font-weight: bold;
        padding-bottom: 6.8vh;
    }
    .actionList>.stata{
        height:3.2vh;
        width: 100%;
    }
    .actionList>.header{
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
    .actionList>.header>.header-black{
        width: 10vw;
        position: absolute;
        margin-left:5.3vw;
        height: 6vh;
    }
    .actionList>.header>.header-black>img{
        width: 100%;
        height: 100%;
    }
    .header-title{
        margin: 0 auto;
    }
    .action-list{
        width: 100%;
        margin-top: 1vh;
    }
    .action-list>ul{
        width: 90%;
        margin: 0 auto;
    }
    .action-list>ul>li{
        width: 42vw;
        margin-left: 1.5vw;
        margin-right: 1.5vw;
        margin-top: 2.4vh;
        height: 18vh;
        float: left;
        background-size:100% 100%;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.15rem;
    }
     .action-list>ul>li>div{
         width: 14.6vw;
         height: 14.6vw;
     }
     .action-list>ul>li>div>img{
         width: 100%;
         height: 100%;
     }
</style>

