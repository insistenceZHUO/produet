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
                    <div class="right"><span class="demonstration">默认</span>
                        <el-date-picker
                        v-model="date"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker></div>
                </div>
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
    height: 100%;
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
        width: 60%;
    }
</style>

