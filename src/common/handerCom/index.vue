<template>
<div id="hander">
    <div class="jianshu-head">
        <img  class="head-img" src="https://cdn2.jianshu.io/asimov/src/assets/image/nav-logo.faf216af.png" alt="">
        <span class="slogan">创作你的创作</span>
        <span class="download"><p class=head-left>&gt;</p>免费下载</span>
        <link rel="stylesheet" href="../font_1217409_ifz6qm84zbd/iconfont.css">
    </div>
    
</div>
</template>


<script>
  export default{
        name:"handerCom",
       
  }


</script>


<style>

.jianshu-head{
    font-size: .32rem;
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    padding: .5rem .32rem;
    border-bottom: 1px solid #757575;
    position: fixed;
    
}
    
.recommend{
    position: fixed;top:1rem;
    overflow-y:scroll;
    height: 12.34rem;
}

.head-img{
    width: 1.12rem;
    height: .94rem;
}

.slogan{
    margin-left: .24rem;
    color: #333;
}

.download{
    position: absolute;right: 0;
    color: #ea6f5a;
    padding: .24rem .7rem
}

.head-left{
    position: absolute;right: 0;
    padding-right: .3rem

}







</style>