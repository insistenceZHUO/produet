<template>
    <div class="silutionVideo">
        <div class="stata"></div>
        <div class="header">
            <div class="header-black">
                <img src="./../../assets/home/back.png">
            </div>
        <div class="header-title">课程体系</div>
    </div>
    <div class="silutionVideo-list">
       <ul class="clearfix">
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
                <li>
                    <div class="content">
                        <div class="title">青少年康复过</div>
                        <div class="btn">查看信息</div>
                    </div>   
                </li>
            </ul>
    </div>
</div>
</template>
<script>
    export default{
    }
</script>
<style>
    .silutionVideo{
        width: 100%;
        height: auto;
        background-image: url("./../../assets/home/home.png");
        background-size: 100% 100%;
        /* background-repeat: repeat; */
        
    }
    .silutionVideo>.stata{
        height:3.2vh;
        width: 100%;
    }
    .silutionVideo>.header{
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
    .silutionVideo>.header>.header-black{
        width: 10vw;
        position: absolute;
        margin-left:5.3vw;
        height: 6vh;
    }
    .silutionVideo>.header>.header-black>img{
        width: 100%;
        height: 100%;
    }
    .header-title{
        margin: 0 auto;
    }
    .silutionVideo-list{
        width: 100%;
        margin-top: 1vh;
    }
    .silutionVideo-list>ul{
        width: 90%;
        margin: 0 auto;
        padding-bottom:8.24vh;
        height: auto;
    }
    .silutionVideo-list>ul>li{
        width: 42vw;
        margin-left: 1.5vw;
        margin-right: 1.5vw;
        margin-top: 1.4vh;
        height: 18.3vh;
        float: left;
        background-image: url('./../../assets/actionList/3_10.png');
        background-size:100% 100%;
        font-size: 0.36rem;
        font-family: "dahei";
        font-weight: 550;
        letter-spacing: 0.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* .silutionVideo-list>ul>li>div{
        width: 100%;
    } */
    .silutionVideo-list>ul>li>.content>.btn{
        width: 22.1vw;
        height: 3.7vh;
        text-align: center;
        line-height: 3.7vh;
        background: #FB6860;
        font-family: "zhonghei";
        border-radius: 0.1rem;
        font-size: 0.28rem;
        margin: 0 auto;
        margin-top:2.4vh;
    }
</style>

