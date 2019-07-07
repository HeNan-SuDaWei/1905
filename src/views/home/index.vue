<template>
  <div class="home">
    <div class="recommend">
      <div class="top-title">
          <h3 class="special">热门专题</h3>
          <span class="collection-change"><p class="icon iconfont">&#xe65e;</p>换一批</span>
      </div>
      <div class="recommend-collection">
          <a href="#">旅行在路上</a>
          <a href="#">摄影</a>
          <a href="#">故事</a>
          <a href="#">读书</a>
          <a href="#">手绘</a>
          <a href="#">简书电影</a>
          <a href="#">自然科普</a>
      </div>     
      <hr>
      <ul class="flow-list-container">
          <li class="not-flow" v-for="(item,index) in content">
              <h3 class="title">{{item.object.data.title}}</h3>
              <span class="warp-img">
                  <img src="" alt="">
              </span>
              <p class="abstract">
                  {{item.object.data.public_abbr}}
              </p>
              <i class="icon iconfont">&#xe675;<span>{{item.object.data.total_fp_amount}}</span><span>{{item.object.data.user.nickname}}</span></i>
              <i class="icon iconfont">&#xe606;<span>{{item.object.data.public_comments_count}}</span></i>
              <i class="icon iconfont">&#xe6db;<span>{{item.object.data.likes_count}}</span></i>
          </li>
          
          
      </ul> 

      <div class="copy">
          <span>展开更多文章</span><i class="icon iconfont">&#xe658;</i>
      </div>

      <hr>
      <div class="download-guide">
          <a href="href">下载简书，创作你的创作</a>
      </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {getHomeNow} from "api/home"

export default {

  name:"home",
 async created(){
   
   let data = await getHomeNow()
   console.log(typeof data[0].object.data.total_fp_amount)
    
    data.map((item)=>{
      item.object.data.total_fp_amount=item.object.data.total_fp_amount/1000;
      console.log( item.object.data.total_fp_amount)
    })
    
    this.content = data
  },
  data(){
    return {
      content:[]
    }
  }

 }
</script>
<style>

.recommend{
    position: fixed;top:1rem;
    overflow-y:scroll;
    height: 12.34rem;
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

.top-title{
    display: flex;
    height: .84rem;
    align-items: center;
}

.special{
    font-size: .28rem;
    margin-left: .4rem
}


.collection-change{
    position: absolute;right: .8rem;
}

.collection-change .iconfont{
    font-size: .24rem;
    position: absolute;right: .8rem;
}

.recommend-collection{
    width: 100%;
    height: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    padding-left: .4rem;
    align-items: center;
    
   
    
}

.recommend-collection a{
    display: block;
    margin-right: .2rem;
    font-size: .32rem;
    border: 1px solid #ea6f5a;
    border-radius: .1rem;
    padding: .1rem;
    color: #ea6f5a;
}

hr{
    height: .2rem;
    background-color: #f5f5f5;
    border: none;
}

.flow-list-container{
    width: 100%;
    height: 100%;
    margin-top: .1rem;
    padding: .36rem; 
    border-bottom: 1px solid #757575;
}

.title{
    float: left;
    font-size: .36rem;
    width: 70%;
    line-height: .5rem;
    margin-bottom: .1rem
}

.not-flow{
    width: 100%;
    line-height: .35rem;
    margin-bottom: .1rem;
    
}

.not-flow .iconfont{
    font-size: .32rem;
}



.warp-img{
    float: right;
    margin-top: .2rem;
}

.abstract{
    width: 70%;
    font-size: .26rem;
    color: #999;
    margin-bottom: .3rem;
}

.copy{
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #969696;
    font-size: .32rem;
}

.copy i{
    font-size: .32rem;
}

.download-guide{
    width: 100%;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.download-guide a{
    display: block;
    width: 4.8rem;
    height: .9rem;
    color: #f5f5f5;
    background-color: #ea6f5a;
    text-align: center;
    font-size: .32rem; 
    line-height: .9rem;
   
}

</style>
