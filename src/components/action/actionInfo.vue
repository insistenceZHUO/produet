<template>
    <div class="actionInfo">
        <div class="stata"></div>
        <div class="header">
            <div class="header-black">
                <img src="./../../assets/home/back.png">
            </div>
        <div class="header-title">评估</div>
    </div>
    <div class="student-info">
        <div class="item">
            <span>姓名：</span><span>小明</span>
        </div>
        <div class="item">
            <span>性别：</span><span>男</span>
        </div>
        <div class="item">
            <span>年龄：</span><span>23岁</span>
        </div>
        <div class="item">
            <span>联系电话：</span><span>13888888888</span>
        </div>
        <div class="item">
            <span>主诉症状：</span><span>无</span>
        </div>
        
    </div>
    <div class="content-font">
       <div class="font-title">
                评估结果
            </div>
            <div class="font-text">
                水中康复运动是通过 “侵入式” 的方式来进行一系列恢复活动能力及生理功能的临床治疗康复过程，有时也会对心理转化转化产生影响，该技术广泛用于脑性瘫痪，神经系统疾病，
                平衡活稳定障碍，骨科手术或损伤后以及脊髓伤等。 
            </div>
    </div>
    <div class="btn">
        <div class="btn-left">重新评估</div>
        <div class="btn-right">解决方案</div>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .actionInfo{
        width: 100%;
        height: 100%;
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .actionInfo>.stata{
        height:3.2vh;
        width: 100%;
    }
    .actionInfo>.header{
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
    .actionInfo>.header>.header-black{
        width: 10vw;
        position: absolute;
        margin-left:5.3vw;
        height: 6vh;
    }
    .actionInfo>.header>.header-black>img{
        width: 100%;
        height: 100%;
    }
    .header-title{
        margin: 0 auto;
    }
    .student-info{
        width: 90%;
        border-bottom: 1px solid #89AAED;
        padding-bottom: 7vh;
        margin: 0 auto;
    }
    .student-info>.item{
      width: 90%;
      padding: 1.3vh 0;
      font-size: 0.30rem;
      font-family: "zhonghei";
      text-align:left;
    }
    .content-font{
        margin-top:3.4vh;
        font-size:0.34rem;
        color:aliceblue;
        padding-bottom: 10vh;
    }
    .content-font>.font-title{
         width: 90%;
         margin: 0 auto;
         font-family: "zhongcuhei";
         font-size: 0.32rem;
         margin-bottom: 2vh;
         text-align: left;
        /* font-size:1 */
    }
    .content-font>.font-text{
        width: 90%;
        text-align: left;
        margin: 0 auto;
        line-height: 4vh;
        font-size: 0.30rem;
        text-indent: 5.2vh;
        font-family: "zhonghei";
    }
    .btn{
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: "zhonghei";
        font-size: 0.32rem;
        font-weight: bold;
        letter-spacing: 0.7vw;
    }
    .btn-left,.btn-right{
        width: 43.2vw;
        height: 5.5vh;
        background: #FB6860;
        /* text-align: center; */
        line-height: 5.5vh;
        border-radius: 0.1rem;
    }
    .btn-left{
        margin-left:5.3vw;
        margin-right: 1.7vw;
    }
     .btn-right{
        margin-right:5.3vw;
        margin-left: 1.7vw;
    }
</style>

