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
                    <p>新增学员</p>
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
    }
    .setStudents>.contnet{
        width: 100%;
        height: 30%;
    }
    .setStudents>.contnet>.title{
        margin-top:0.5rem;
    }
    .setStudents>.contnet>.text{
        margin:0 auto;
        margin-top:0.5rem;
        font-size:0.15rem;
        width: 88%;
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
        width: 1.5rem;
        margin: 0 auto;
        height: 1.5rem;
        font-size: 0.22rem;
        margin-top:.2rem; 
        color: #000;
        background: #ffffff;
        
    }
    .margin:before{
    content: "";
    display:table;
    /*color:black;*/
    }
</style>

