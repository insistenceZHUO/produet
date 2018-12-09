<template>
    <div class="solutionAction">
        <div class="stata"></div>
        <div class="header">
            <router-link  tag="div" to="/silutionVideo"class="header-black">
                <img src="./../../assets/home/back.png">
            </router-link>
        <div class="header-title">腰背部分</div>
        <div class="header-home"><img src="./../../assets/solutionAction/right.png"></div>
    </div>
     <div class="content">
         <div class="one"></div>
         <div class="two"></div>
         <div class="three">
             <div class="video-img">
                 <img src="./../../assets/solutionAction/video.png">
             </div>
         </div>
     </div>
     <div class="coures">第一节</div>
     <div class="coures-time">课程时长：11分22秒 播放次数: 30</div>
     <div class="coures-count">
         <div class="left"><img src="./../../assets/solutionAction/next.png"></div>
         <div class="content">视频有三节</div>
         <div class="right"><img src="./../../assets/solutionAction/prve.png"></div>
     </div>
    </div>
</div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
 .solutionAction{
        width: 100%;
        height: 100%;
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
        /* background-repeat: repeat; */
        
    }
    .solutionAction>.stata{
        height:3.2vh;
        width: 100%;
    }
    .solutionAction>.header{
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
    .solutionAction>.header>.header-black{
        width: 10vw;
        position: absolute;
        margin-left:5.3vw;
        height: 6vh;
    }
    .solutionAction>.header>.header-black>img{
        width: 100%;
        height: 100%;
    }
       .solutionAction>.header>.header-home{
        width: 10vw;
        position: absolute;
        right:5.3vw;
        height: 6vh;
    }
    .solutionAction>.header>.header-home>img{
        width: 100%;
        height: 100%;
    }
    .header-title{
        margin: 0 auto;
    }
    .content{
    width: 100%;
     margin: 0 auto;
     margin-top: 3.7vh;
     padding-bottom:2vh;
}
.content>.one{
    width: 71vw;
    height:2.4vh;
    border-top-left-radius:0.1rem; 
    border-top-right-radius:0.1rem; 
    background: #C0DAF4;
     margin: 0 auto;
}
.content>.two{
    height: 2.8vh;
     margin: 0 auto;
    width: 80%;
     border-top-left-radius:0.1rem; 
    border-top-right-radius:0.1rem; 
    background-color: #F7F7F7;
}
.content>.three{
    width: 90%;
    border-top-left-radius:0.2rem; 
    border-top-right-radius:0.2rem;
    margin: 0 auto;
    height: 58vh;
    background: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
}
.content>.three>.video-img{
    width: 24vw;
}
.content>.three>.video-img>img{
    width: 100%;
    height: 100%;
}
.coures{
    margin-top:4.5vh;
    font-size: 0.36rem;
    font-family: "zhongcuhei";
}
.coures-time{
    font-size: 0.24rem;
    font-family: "hei";
    opacity: 0.7;
    margin-top: 1.5vh;
}
.coures-count{
    font-size: 0.28rem;
    font-family: "zhonghei";
    display: flex;
    width: 47vw;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
}
.coures-count>.left,.coures-count>.right{
    width: 20vw;
    height: 6vh;
}
.coures-count>.left>img,.coures-count>.right>img{
    width: 100%;
    height: 100%;
}
</style>

