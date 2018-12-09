<template>
    <div class="searchStudents">
        <div class="stata"></div>
        <div class="header">
            <router-link tag="div" to="/setStudents" class="header-black"><img src="./../../assets/searchStudents/black.png"></router-link>
            <div class="header-title">
                水中运动康复
            </div>
        </div>
      <div class="search">
            <input type="text"placeholder="搜索学员">
            <img src="./../../assets/searchStudents/search.png">
     </div>
     <div class="content">
         <div class="one"></div>
         <div class="two"></div>
         <div class="three">
             <ul>
                 <li>
                     <div class="list">
                             <div class="left"><img src="./../../assets/searchStudents/head.png"></div>
                             <div class="center">
                                 <div class="top"><span>王小红 </span><img src="./../../assets/searchStudents/man.png"></div>
                                 <div class="bottom"><span>12岁</span><span style="margin-left:4vw;">18077112512</span></div>
                            </div>
                            <div class="right">康复治疗</div>
                     </div>
                 </li>
                  <li>
                     <div class="list">
                             <div class="left"><img src="./../../assets/searchStudents/head.png"></div>
                             <div class="center">
                                 <div class="top"><span>王小红 </span><img src="./../../assets/searchStudents/man.png"></div>
                                 <div class="bottom"><span>12岁</span><span>18077112512</span></div>
                            </div>
                            <div class="right">康复治疗</div>
                     </div>
                 </li>
                 <li>
                     <div class="list">
                             <div class="left"><img src="./../../assets/searchStudents/head.png"></div>
                             <div class="center">
                                 <div class="top"><span>王小红 </span><img src="./../../assets/searchStudents/man.png"></div>
                                 <div class="bottom"><span>12岁</span><span>18077112512</span></div>
                            </div>
                            <div class="right">康复治疗</div>
                     </div>
                 </li>
                 <li>
                     <div class="list">
                             <div class="left"><img src="./../../assets/searchStudents/head.png"></div>
                             <div class="center">
                                 <div class="top"><span>王小红 </span><img src="./../../assets/searchStudents/man.png"></div>
                                 <div class="bottom"><span>12岁</span><span>18077112512</span></div>
                            </div>
                            <div class="right">康复治疗</div>
                     </div>
                 </li>
                 <li>
                     <div class="list">
                             <div class="left"><img src="./../../assets/searchStudents/head.png"></div>
                             <div class="center">
                                 <div class="top"><span>王小红 </span><img src="./../../assets/searchStudents/man.png"></div>
                                 <div class="bottom"><span>12岁</span><span>18077112512</span></div>
                            </div>
                            <div class="right">康复治疗</div>
                     </div>
                 </li>
                  <li>
                     <div class="list">
                             <div class="left"><img src="./../../assets/searchStudents/head.png"></div>
                             <div class="center">
                                 <div class="top"><span>王小红 </span><img src="./../../assets/searchStudents/man.png"></div>
                                 <div class="bottom"><span>12岁</span><span>18077112512</span></div>
                            </div>
                            <div class="right">康复档案</div>
                     </div>
                 </li>
             </ul>
         </div>
     </div>
    </div>
</template>
<style scoped>
    .searchStudents{
        width: 100%;
        height: 100%;
        background-image: url("./../../assets/home/home.png");
        background-size:100% 100%;
    }
    .searchStudents>.stata{
        width: 100%;
        height:3vh;
    }
    .searchStudents>.header{
        width: 100%;
        height: 6vh;
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
    .header-title{
        font-size: 0.4rem;
        font-family: "zhongcuhei";
        text-align: center;
        margin: 0 auto;
    }
     .search{
         margin-top:1vh;
         position: relative;
         display: flex;
         align-items: center;
         text-align: center;
         justify-content: center;
    } 
    .search>img{
        width: 5vw;
        height: 5vw;
        position: absolute;
        left: 6.6vw;
        top: 0;
        bottom: 0;
        margin: auto;
    }
.search>input{
    width: 80%;
    height: 5.1vh;
    font-size: 0.28rem;
    color:#757575;
    padding-left:10vw;
    border-radius: 0.1rem;
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
}
.three>ul{
     border-top-left-radius:0.4rem; 
    border-top-right-radius:0.4rem;
}
.three>ul>li{
    display:flex;
    justify-content: center;
    color:#000;
    background:#fff;
    width: 100%;
    height: 11.7vh;
   
}
.three>ul>li>.list{
    display: flex;
    width: 88.4%;
    height: 11.7vh;
    
   border-bottom:1px solid #ECEBEB;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.list>.left{
    width: 1rem;
    height: 1rem;
}
.list>.left>img{
    width: 100%;
    height: 100%;
}
.list>.center{
    font-size:0.3rem;
    display: flex;
    flex-direction: column;
}
.list>.center>.top{
    font-size: 0.3rem;
    text-align: left;
    font-family: "zhonghei";
    font-weight: bold;
    color:#413E3A;
}
.list>.center>.bottom{
    font-size:0.24rem;
    font-family: "hei";
    color:#52504C;
}
.list>.center>.top>img{
    width: 0.4rem;
    height: 0.4rem;
}
.list>.right{
    width: 21.8vw;
    height: 4.7vh;
    background:#FB6860;
    font-size: 0.32rem;
    text-align: center;
    line-height: 4.7vh;
    border-radius: 0.1rem;
    font-family: "zhonghei";
    color:#fff;
}
/*.search>input{
        width: 6.5rem;
        height: 0.6rem;
    } */
</style>

