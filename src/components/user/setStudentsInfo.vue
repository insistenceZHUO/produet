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
                    <div class="describe-title">主诉症状<span>(十个字以内)</span></div>
                    <div class="describe-input"><input type="text"></div>
                </div>
                <div class="item-question">
                    <div class="question-title"><span>问题描述</span></div>
                    <div class="textarea"><textarea  style="border:1px solid #000;width:100%;"></textarea></div>
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
    height: 146%;
    background-image:url("./../../assets/home/home.png");
}
.stata{
    width: 100%;
    height: .44rem;
}
   .setStudentInfo>.header{
        width: 100%;
        height: 0.8rem;
        display: flex;
        align-items: center;
        position: relative;
        /* justify-content: center; */
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
        font-size: 0.32rem;
    }
    .container{
        width: 100%;
        height: 12.7rem;
        display: flex;
        justify-content: center;
    }
    .container>.input{
        width: 80%;
        height: 100%;
        background: #ffffff;
        border: 1px solid #ffffff;
    }
    .input>.item{
        width: 92%;
        height: 0.68rem;
        margin: 0 auto;
        border:1px solid #333;
        border-radius: 0.15rem;
        display: flex;
        color:black;
    }
    .input>.item>.left{
        width: 30%;
        border-right:1px solid red;
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
        height: 0.68rem;
        margin: 0 auto;
        border:1px solid #333;
        border-radius: 0.15rem;
        display: flex;
        color:black;
    }
    .input>.item-sex>.left{
        width: 50%;
        border-right:1px solid red;
        background:red;
    }
     .input>.item-sex>.left,.input>.item-sex>.right{
        display: flex;
        justify-content: center;
        align-items: center;
     }
    .input>.item-sex>.right{
        width: 50%;
    }
    
    .item-sex>.left>img,.item-sex>.right>img{
        width: 0.5rem;
        height: 0.5rem;
        /*width: 100%;height: 100%;*/
    }
    .item-sex>.left>span,.item-sex>.right>span{
        padding-left: 0.2rem;
        
    }
    .item-describe{
          width: 92%;
          height: 1rem;
          text-align: left;
          margin: 0 auto;
          /*display: flex;
            justify-content: center;*/
    }
    /*.item-describe>.details-title{*/
        /*display: flex;
        justify-content: flex-start;*/
        
    /*}*/
    .item-describe>.describe-input{
        width: 100%;
        height: 0.5rem;
        /*border: 1px solid #000;*/
        
    }
    .item-describe>.describe-input>input{
        width: 100%;
        height: 100%;
        border:1px solid #000;
        border-radius: 0.08rem;
    }
    .item-question{
        text-align: left;
         width: 92%;
         margin: 0 auto;
    }
    .item-question>.question-title>span{
        font-size: 0.2rem;
        color:#000;
    }
    .item-describe>.textarea{
        width: 100%;
    }
    .item-describe>.textarea>textarea{
        width: 100%;
        height: 2rem;
        border:1px solid #000;
    }
    .btn{
        width: 92%;
        margin: 0 auto;
        border:1px solid red;
        color: #000;
    }
    /*.item-question>.textPath*/
</style>

