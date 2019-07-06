<template>
<div id="hander">
<header>
    <div class="hzy-box">
       <a href="#"><img src="" alt="" class="log"></a>
        <form action="">
            <div class="hzy-a"><img src="" alt=""></div>
            <input type="text" class="hzy-ipt" value="苏大伟 打球啦">
        </form>
       <div class="hzy-1"><img src="" alt=""></div>
       <div class="hzy-2">下载APP</div>
    </div>


</header>
</div>

</template>


<script>
  export default{
        name:"handerCom",
       
  }


</script>


<style>

.hzy-box{
    width: 100%;
    height:.88rem;
    overflow: hidden;
    padding: .27rem 0;
    border-bottom: 1px solid #ccc;
    position: fixed;
    top: 0;
    left: 0;
}

.hzy-box>a{
    display: block;
    width: 1.24rem;
    height: .56rem;
    float: left;
    margin-left: .5rem;
    
}

.hzy-box>form{
    display: block;
    float: left;
    width: 2.64rem;
    height: .48rem;
    padding-left: .22rem;
    background: #f4f4f4;
    margin-left: .5rem;
    border-radius: .512rem;
}

.hzy-box>form>.hzy-a{
    width: .24rem;
    height: .26rem;
    float: left;
}

.hzy-box>form>.hzy-a>img{
    width: 100%;
    height: 100%;
    margin-top: .1rem;
}

.hzy-box>form>.hzy-ipt{
    width: 1.84rem;
    height: .48rem;
    display: block;
    float: left;
    background: #f4f4f4;
    border: none;
    color: #999;
    font-size: .2rem;
    text-align: center;

}

.hzy-box>a>.log{
    width: 100%;
    height: 100%;
    
}





.hzy-1{
    float: left;
    width: .48rem;
    height: .48rem;
    margin-left: .2rem;
}
.hzy-1>img{
    width: 100%;
    height: 100%;
}
.hzy-2{
   float: left;
   width: 1.6rem;
   height: .48rem;
   font-size: .25rem;
   line-height: .48rem;
   text-align: center;
   color: #fff;
   background: #ff6d96;
   margin-left: .2rem;
   border-radius: 10px;
}


</style>