<template>
    <div class="searchStudents">
        <div class="stata"></div>
        <div class="header">
            <div class="header-black"><img src="./../../assets/searchStudents/black.png"></div>
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
    }
    .searchStudents>.stata{
        width: 100%;
        height: 0.4rem;
    }
    .searchStudents>.header{
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
    .header-title{
        font-size: 0.4rem;
        text-align: center;
        margin: 0 auto;
    }
     .search{
         margin-top:0.14rem;
         position: relative;
         display: flex;
         align-items: center;
         text-align: center;
         justify-content: center;
    } 
    .search>img{
        width: 0.5rem;
        height: 0.5rem;
        position: absolute;
        left: 0.50rem;
        top: 0;
        bottom: 0;
        margin: auto;
    }
.search>input{
    width: 80%;
    height: 0.68rem;
    padding-left:0.66rem;
    border-radius: 0.1rem;
}
.content{
    width: 100%;
     margin: 0 auto;
     margin-top: 0.5rem;
}
.content>.one{
    width: 5.3rem;
    height: 0.32rem;
    border-top-left-radius:0.1rem; 
    border-top-right-radius:0.1rem; 
    background: #C0DAF4;
     margin: 0 auto;
}
.content>.two{
    height: 0.38rem;
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
     border-top-left-radius:0.2rem; 
    border-top-right-radius:0.2rem;
}
.three>ul>li{
    display:flex;
    justify-content: center;
    color:#000;
    background:#fff;
    width: 100%;
    height: 1.56rem;
}
.three>ul>li>.list{
    display: flex;
    width: 88.4%;
    height: 1.56rem;
   border-bottom:1px solid #ECEBEB;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.list>.left{
    width: 0.6rem;
    height: 0.6rem;
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
    font-weight: bold;
}
.list>.center>.bottom{
    font-size:0.24rem;
}
.list>.center>.top>img{
    width: 0.4rem;
    height: 0.4rem;
}
.list>.center>.right{
    font-size: 0.32rem;
}
/*.search>input{
        width: 6.5rem;
        height: 0.6rem;
    } */
</style>

