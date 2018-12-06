<template>
  <div class="setStudents">
      <div class="contnet margin">
          <div class="title">
            水中运动康复
          </div>
          <p class="text">
            水中康复运动是通过“侵入式”的方式进行一系列恢复活动能力及生理功能的临床治疗的康复过程，有时也会对心理转化造成影响。
          </P>
      </div>
      <div class="set-info">
            <div class="add-student">
                    <div class="add-student-info"><img src="./../../assets/setStudent/3_27.png"></div>
                    <p>新增学员</p>
            </div>
            <div class="add-student">
                    <div class="add-student-info"><img src="./../../assets/setStudent/3_27.png"></div>
                    <p>我的学员</p>
            </div>
            <!--<div></div>-->
            <!--<div class=""></div>-->
      </div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
    .setStudents{
        /*position: relative;*/
        width: 100%;
        height: 100%;
        background-image: url('./../../assets/home/home.png');
        background-size: 100% 100%;
    }
    .setStudents>.contnet{
        width: 100%;
        height: 30%;
    }
    .setStudents>.contnet>.title{
        margin-top:0.5rem;
        font-size: 0.48rem;
          color:#ffffff;
        font-family: "zhongcuhei";
    }
    .setStudents>.contnet>.text{
        margin:0 auto;
        margin-top:0.5rem;
        font-size:0.3rem;
        font-family: "zhonghei";
        /* font-weight: bold; */
        line-height: 0.5rem;
        letter-spacing: 0.5vw;
        width: 88%;
        color:#ffffff;
        text-indent:0.3rem;
        text-align: left;
    }
    .set-info{
        width: 100%;
        height: auto;
        display: flex;
         flex-direction:column;
        justify-content: center;
    }
    .add-student{
        width: 46.6vw;
        margin: 0 auto;
        height: 23vh;
        font-size: 0.4rem;
        font-family: "zhongcuhei";
        font-weight: 550;
        margin-top:.2rem; 
        color: #413E3C;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .margin:before{
    content: "";
    display:table;
    /*color:black;*/
    }
    .add-student-info{
        width: 15.2vw;
        height: 8.2vh;
    }
    .add-student-info>img{
        width: 100%;
        height: 100%;
    }
    .add-student>p{
        margin-top:3.5vh;
    }
</style>

