<template>
    
      <section>
        <div class="he">
            <div class="he1">
                <img :src="content.image" >
            </div>

            <div class="he2">
                <h3>{{content.title}}</h3>
                 <i>{{content.owner.nickname}}</i><span> 编，{{content.notes_count}}万篇文章， {{content.subscribers_count}}万人关注</span>
                <!--<p class="hzy-p1">本专题收录电影相关文章。要求文内不得带有公众号信息等推广内容。 </p>
                <br>
                "详细规定、推荐首页、联系主编事宜请阅读专题须知："
                <a href="#">https://www.jianshu.com/p/400ae26fd3d7</a>
                <p class="hzy-p2">专题主编：魔鬼的赞歌 </p>
                <a href="#">https://www.jianshu.com/u/680ea2b754fc</a>
                <b class="he-b">收起</b> -->
                <div v-html="content.content_in_full"></div>
                <div class="he-an">+&nbsp;关注</div>
            </div>
        </div>
        <hr/>
        <ul class="hzy-k">
           
                    <router-link  to="/routing/comment" tag='li'>最新收入</router-link>
                    <router-link  to="/routing/lncluded" tag='li'>最新评论</router-link>
                    <router-link  to="/routing/popular" tag='li'>热门</router-link>
           
            
             
        </ul>
        <keep-alive>
                <router-view></router-view>
        </keep-alive>
        
    </section>
    
  </template>
  
  <script>
  // @ is an alias to /src
  
  import { getHomeLife } from "api/home"
    export default {
        name: "life",
        async created() {
            let data = await getHomeLife();
            console.log(data)
            data.notes_count= (data.notes_count/10000).toFixed(1);
            data.subscribers_count=(  data.subscribers_count/10000).toFixed(1);
       
       
            this.content = data;
            console.log(this.content.notes_count)
         

        },
        data() {
            return {
                content: ''
            }
        }
    }
  </script>
  <style >
  
  section{
    top: .96rem;
    box-sizing: border-box;
    padding: 0 .36rem;
    position: fixed;
    height: 12.34rem;
    overflow-y: scroll;
}


.he{
    box-sizing: border-box;
    padding: .4rem 0 .3rem;
    font-size: 14px;
    overflow: hidden;
    width: 100%;
   
}

.he1{
    float: left;
    width: 1.44rem;
    height: 1.44rem;
    margin-right: .26rem;
    background: green;
}
.he1 img {
    width: 1.44rem;
    height: 1.44rem;
}
.he2{
    float: left;
    width: 5rem;
   
}

.he2>h3{
    font-size: .4rem;
}


.he2>i{
    color: #3194d0;
    font-style: normal;
}

.he2>span{
    color: #969696;
}

.he2>.hzy-p1{
    margin-top: .12rem;
}

.he2>a {
    color: #3194d0;
}


.he2>.he-an{
    width: 100%;
    background: #42C02E;
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin: 12px 0 ;
    padding: 6px 0;
    
}

hr{
    margin-left: -18px;
    margin-right: -18px;
    border-width: 0;
    height: 10px;
    background-color: #f5f5f5;
}


.hzy-k{
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    
}

.hzy-k>li{
    padding: 12px 0;
    margin: -1px 0;
}

.hzy-m{
    padding: .3rem ;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    
}

.hzy-m h5{
    font-size: .36rem;
    color: #000;
    
}

.hzy-5{
    float: left;
}

.hzy-m .hzy-5{
    display: block;
    width: 4.5rem;
}
.hzy-5>p{
    height: .64rem;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    margin-top: .1rem;
   line-height: .3rem;
}

.hzy4{
    display: block;
    float: right;
    width: 1.4rem;
    height: 1.4rem;
    margin-top: .4rem;
   
}
.hzy4 img{
    width:1.4rem;
    height: 1.4rem; 
}


.hzy-p{
    margin-top: .4rem;
    float: left;
}

.hzy-p i{
    padding-right: .04rem;
    margin-right: .06rem;
}
.hzy-p span{
    padding-right: .04rem;
}
.copy {
        width: 100%;
        height: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #969696;
        font-size: .32rem;
    }

    .copy i {
        font-size: .32rem;
    }

    .download-guide {
        width: 100%;
        height: 4.4rem;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .download-guide a {
        display: block;
        width: 4.8rem;
        height: .9rem;
        color: #f5f5f5;
        background-color: #ea6f5a;
        text-align: center;
        font-size: .32rem;
        line-height: .9rem;

    }
    .sp{
        font-size: .24rem;
    }
  </style>