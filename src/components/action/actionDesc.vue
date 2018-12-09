<template>
    <div class="actionDesc">
        <div class="stata"></div>
        <div class="header">
            <router-link to="/testAction" class="header-black">
                <img src="./../../assets/home/back.png">
            </router-link>
        </div>
        <div class="content-img">
            <div class="content-block">
                <img src="./../../assets/actionDesc/logo.png">
            </div>
        </div>
        <div class="title">正面体态，骨盆是否水平，单侧抬高</div>
           <div class="skeleton-img">
            <div class="skeleton-block">
                <img src="./../../assets/actionDesc/skeleton.png">
            </div>
        </div>
        <div class="content-font">
            <div class="font-title">
                动作描述
            </div>
            <div class="font-text">
                水中康复运动是通过 “侵入式” 的方式来进行一系列恢复活动能力及生理功能的临床治疗康复过程，有时也会对心理转化转化产生影响，该技术广泛用于脑性瘫痪，神经系统疾病，
                平衡活稳定障碍，骨科手术或损伤后以及脊髓伤等。 
            </div>
        </div>
        <div class="btn">
            <router-link tag="div"to="/actionInfo" class="yes">能</router-link>
            <router-link tag="div"to="/actionInfo" class="no">不能</router-link>
        </div>
    </div>
</template>
 <script>
     export default{
     }
 </script>
<style scoped>
    .actionDesc{
        width: 100%;
        height: 100%;
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .actionDesc>.stata{
        height:3.2vh;
        width: 100%;
    }
    .actionDesc>.header{
        /* height: 100%; */
        width: 100%;
        height: 7.4vh;
        display: flex;
        align-items: center;
    }
     /*.header-black{
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        padding-left:0.4rem;
    }*/
    .actionDesc>.header>.header-black{
        width: 10vw;
        margin-left:5.3vw;
        height: 6vh;
    }
    .actionDesc>.header>.header-black>img{
        width: 100%;
        height: 100%;
    }
    .content-img{
        width: 100%;
        height:14vh;
        display: flex;
        justify-content: center;
    }
    .content-img>.content-block{
        width: 1.4rem;
        height: 12vh;
    }
    .content-img>.content-block>img{
        width: 100%;
        height: 100%;
    }
    .actionDesc>.title{
        width: 100%;
        font-size: 0.30rem;
        font-family: "zhongcuhei";
        font-weight: bold;
        color:aliceblue;
    }
     .skeleton-img{
         margin-top: 3.7vh;
        width: 100%;
        height:32.6vh;
        display: flex;
        justify-content: center;
    }
    .skeleton-img>.skeleton-block{
        width: 90%;
        height: 30vh;
    }
    .skeleton-img>.skeleton-block>img{
        width: 100%;
        height: 100%;
    }
    .content-font{
        font-size:0.34rem;
        color:aliceblue;
    }
    .content-font>.font-title{
         width: 90%;
         margin: 0 auto;
         font-size:0.32rem;
         font-weight: bold;
         font-family: "zhongcuhei";
         margin-bottom: 2vh;
         text-align: left;
        /* font-size:1 */
    }
    .content-font>.font-text{
        width: 90%;
        text-align: left;
        margin: 0 auto;
         font-size:0.30rem;
         font-weight: bold;
         font-family: "zhongcuhei";
        line-height: 4vh;
        text-indent: 6vh;
    }
    .btn{
        margin: 0 auto;
        width: 90%;
        display: flex;
    }
    .yes{
         width: 43.2vw;
        height: 5.5vh;
        background: #FB6860;
        display: flex;justify-content: center;
        align-items: center;
        border-radius: 0.1rem;
    }
    .no{
        width: 43.2vw;
        height: 5.5vh;
        /*background: #FB6860;*/
         display: flex;justify-content: center;
        align-items: center;
        border-radius: 0.1rem;
        border: 0.01rem solid #ffffff;
    }
</style>

