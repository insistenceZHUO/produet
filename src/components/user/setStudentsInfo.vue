<template>
    <div class="setStudentInfo">
         <div class="stata"></div>
        <div class="header">
            <div class="header-black"><img src="./../../assets/searchStudents/black.png"></div>
        </div>
        <div class="content-img">
            <div class="content-img-item">
                 <img src="./../../assets/setSteduntInfo/top.png">
            </div>
        </div>
        <div class="title">小明教练，您好！请告诉我学员相关信息</div>
        <div class="container">
            <div class="input">
                <div class="item">
                    <div class="left">姓名</div>
                    <div class="right">小林</div>
                </div>
                <div class="item">
                    <div class="left">联系电话</div>
                    <div class="right">13012345678</div>
                </div>
                <div class="item">
                    <div class="left">出生日期</div>
                    <div class="right"><span>默认</span>
                     </div>
                </div>
                <div class="item-sex">
                    <div class="left"><img src="./../../assets/setSteduntInfo/woman.png"><span>男性</span></div>
                    <div class="right"><img src="./../../assets/setSteduntInfo/woman.png" alt=""><span>女性</span>
                      </div>
                </div>
                <div class="item-describe" style="color:#000;text-algin:left;">
                    <div class="describe-title">主诉症状<span style="color:#B0B0AF;"> ( 十个字以内 ) </span></div>
                    <div class="describe-input"><input type="text"></div>
                </div>
                <div class="item-question">
                    <div class="question-title"><span>问题描述</span></div>
                    <div class="textarea"><textarea  style="border:1px solid #A9A8A7; width:100%;"></textarea></div>
                </div>
                <div class="btn">保存并开始测试</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                date:"",
            }
            
        }
    }
</script>
<style scoped>
.setStudentInfo{
    width: 100%;
    height: auto;
    background-image:url("./../../assets/home/home.png");
}
.stata{
    width: 100%;
    height: 3.3vh;
}
   .setStudentInfo>.header{
        width: 100%;
        height: 6vh;
        display: flex;
        align-items: center;
        position: relative;
    }
    .header-black{
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        padding-left:0.4rem;
    }
    .header-black>img{
        width: 100%;
        height: 100%;
    }
    .content-img{
        display: flex;
        justify-content: center;
    }
    .content-img-item{
        width: 20%;
        height: 11.1vh;
    }
    .content-img-item>img{
        width: 100%;
        height: 100%;  
    }
    .title{
        margin-top:2vh;
        font-family: "zhongcuhei";      
        font-size: 0.28rem;
        font-weight: bold;
    }
    .container{
        width: 100%;
        height: 95vh;
        margin-top:3.9vh;
        display: flex;
        justify-content: center;
         padding-bottom: 10vh;
    }
    .container>.input{
        width: 89%;
        height: 100%;
        background: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 0.2rem;
    }
    .container>.input>div{
        margin-top:3vh;
    }
    .input>.item{
        width: 92%;
        height: 5vh;
        margin: 0 auto;
        border:0.02rem solid #A9A8A7;
        border-radius: 0.15rem;
        display: flex;
        color:#757473;
        font-family: "zhonghei";
        font-weight: bold;
    }
    .input>.item>.left{
        width: 30%;
        font-size:0.3rem;
        font-family: "zhonghei";
        border-right:2px solid #D9D8D8;
        color:#757473;
    }
     .input>.item>.left,.input>.item>.right{
        display: flex;
        justify-content: center;
        align-items: center;
     }
    .input>.item>.right{
        width: 70%;
    }
     .input>.item-sex{
        width: 92%;
        height: 5.1vh;
        margin: 0 auto;
        border:1px solid #A9A8A7;
        border-radius: 0.15rem;
        display: flex;
        color:#fff;
        font-weight: bold;
    }
    .input>.item-sex>.left{
        width: 50%;
        overflow: hidden;
        border-radius: 0.15rem;
        border-right:1px solid #FB6860;
        background:#FB6860;
    }
     .input>.item-sex>.left,.input>.item-sex>.right{
        display: flex;
        justify-content: center;
        align-items: center;
     }
    .input>.item-sex>.right{
        width: 50%;
        color:#757473;
    }
    
    .item-sex>.left>img,.item-sex>.right>img{
        width:0.4rem;
        height: 0.4rem;
        /*width: 100%;height: 100%;*/
    }
    .item-sex>.left>span,.item-sex>.right>span{
        padding-left: 0.2rem;
        
    }
    .item-describe{
          width: 92%;
          height: 7.5vh;
          text-align: left;
          margin: 0 auto;
    }
     .item-describe>.describe-title{
        font-size: 0.3rem;
        color:#757473;
        font-family: "zhonghei";
        font-weight: bold;
        font-family: "zhonghei";
     }
     .item-describe>.describe-title>span{
         color:#C4C3C3;
         font-size: 0.24rem;
         font-weight: 550;
         font-family: "zhonghei";
     }
    .item-describe>.describe-input{
        width: 100%;
        height: 5.2vh;
    }
    .item-describe>.describe-input>input{
        width: 100%;
        height: 100%;
        border:0.01rem solid #A9A8A7;
        border-radius: 0.08rem;
        margin-top: 1.8vh;
    }
    .item-question{
        text-align: left;
        width: 92%;
        margin: 0 auto;
        font-family: "zhonghei";
        font-weight: bold;
    }
    .item-question>.question-title>span{
        font-size: 0.30rem;
        color:#757473;
        font-family: "zhonghei";
    }
    .item-question>.textarea{
        width: 100%;
        margin-top: 1.8vh;
    }
    .item-question>.textarea>textarea{
        width: 100%;
        height: 26vh;
        border:0.01rem solid #757473;
        border-radius: 0.15rem;
    }
    .container>.input>.btn{
        width: 92%;
        height: 6.1vh;
        margin: 0 auto;
        margin-top:7.4vh;
        text-align: center;
        line-height:  6.1vh;
        /* border:1px solid red; */
        background:#FB6860;
        font-size:0.32rem;
        font-family: "zhonghei";
        letter-spacing: 0.02rem;
        font-weight: bold;
        border-radius: 0.15rem;
        color: #fff;
       
    }
    /*.item-question>.textPath*/
</style>

