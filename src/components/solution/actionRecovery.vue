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
    <div class="action">
        <div class="action-img">
            <img src="./../../assets/actionRecovery/actionRecovery.png">
        </div>
    </div>
    <div class="title">
        <div class="content">
            <div class="coures">课程时长： 11分22秒 <span>播放次数：30</span></div>
            <div class="free">免费</div>
        </div>
    </div>
    <div class="desc">
        <div class="desc-title">动作描述</div>
        <div class="desc-content">水中康复运动是通过“浸入水”的方式来进行一系列恢复活动能力及生理功能的临床治疗康复过程,有时也会对心理转化产生影响,
            该技术广泛适用于脑性瘫痪、神经系统疾病、平衡或稳定障碍、骨科手术或损伤后以及脊髓损伤等。</div>
    </div>
    <div class="btn">
        <div class="left">返回首页</div>
        <div class="right">下一步</div>
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
    .action{
        width: 100%;
        height: auto;
        margin-top:1.5vh;
    }
    .action>.action-img{
        width: 90%;
        height: 29.6vh;
        margin: 0 auto;
    }
    .action>.action-img>img{
        width: 100%;
        height: 100%;
    }
    .title{
        width: 100%;
        margin-top: 1vh;
    }
    .title>.content{
        margin: 0 auto;
        width: 90%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 0.22rem;
        font-family: "hei";
    }
     .title>.content>.free{
         width: 8.5vw;
         height: 2.2vh;
         margin-left: 8vw;
         border: 1px solid #fff;
         border-radius: 0.1rem;
     }
     .desc{
         width: 100%;
         margin-top:3.4vh;
         height: auto;
     }
     .desc>.desc-title{
         width: 90%;
         margin: 0 auto;
         font-size: 0.32rem;
         font-family: "zhongcuhei";
         text-align: left;
     }
     .desc>.desc-content{
         width: 90%;
         text-align: left;
         margin: 0 auto;
          margin-top:2vh;
         font-size: 0.30rem;
         font-family: "zhonghei";
         /* letter-spacing: 0.1rem; */
         text-indent: 8.5vw;
         line-height: 5vh;
         padding-bottom: 8vh;
     }
     .btn{
         width: 90%;
         margin: 0 auto;
         display: flex;
         justify-content:space-between;
     }
     .btn>.left,.btn>.right{
         width: 43.4vw;
         height: 5.2vh;
         background: #FB6860;
         border-radius: 0.12rem;
         text-align: center;
         line-height: 5.2vh;
         font-size: 0.32rem;
         font-family: "zhonghei";       
     }
</style>

