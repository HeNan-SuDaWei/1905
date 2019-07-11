<template>
<div class="love_home">
    <div class="love">
        <div class="nov_inif">
            <img src="https://upload.jianshu.io/book/image/413f0078-2dde-42f1-bff0-44b8c09c0c0a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/133" alt="">
            <div class="nov_title">
                嘿,我想和你谈个恋爱<span class="fllow-btn">+关注</span>
                (原名《失恋33天》) 
                
                <div class="author">
                    <img src="https://upload.jianshu.io/users/upload_avatars/646344/dd61d4a328ac.JPG?imageMogr2/auto-orient/strip" alt="">
                        <span>唐妈</span>
                </div> 
                     <div class="foucs">18.4万字&nbsp;.53万阅读&nbsp;.295人关注</div>
            </div>
        </div>
    </div>
    <div class="options-group">
        <div class="options">
            <p>暂无简介</p>  
        </div>
        <div class="group">
            <span>言情</span>  
        </div>
    </div>
    <div class="intros">
        <span class="icon iconfont iconft">&#xe619;</span><a href="#" >嘿,我想和你谈个恋爱(番外五)</a><span>2016-06-25 10:07</span>
    </div>
    <hr>
    <div class="book">
        <span class="book_title">目录(共48篇)</span>
        <p class="book_rest" @click="handle()">切换顺序</p>
    </div>
    <div class="book_chapter">
      <ul>
        <li class="chapter" v-for="(items,index) in content" :key="index">
            <div class="part">{{index+1}}</div>
            <a href="" class="content">
                <div class="info">{{items.title}}</div>
                <div class="meta"><span>字数：{{items.wordage}}</span><span>阅读：{{items.views_count}}</span><span>时间:03-01</span></div>
            </a>
        </li>
        
       </ul>
    </div>
    <div class="scroll-lazec">
        <span class="icon iconfont">加载更多&#xe658;</span>
    </div>
    <hr>

    <div class="novels-list">
        <div class="to-title">
            <h3>更多精彩加载</h3>
        </div>
        <div class="noves-group">
            <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/318a32a2-86cd-41f9-8702-d5f67d757bca?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/2662/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
            <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/912575b3-884f-461b-8b8b-543ac465ecc0?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div> <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/ce1099cf-e960-45da-bc41-83bb0f22d80a?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
             <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/085ea691-f337-45d6-ac74-cce6085e4e79?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
             <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/58cdbec3-c217-4584-8ef8-bbab768046f2?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
             <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/dbe246db-259c-4ef0-900f-b5bb02e73700.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
             <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/289fb41a-ca11-4d5f-bd2f-d22141d4a026?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
             <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/a4e6a419-b7f5-4941-bed6-0bdd63fa9b80?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
             <div class="noves-copy">
                <img src="https://upload.jianshu.io/book/image/922e975e-c08e-4a65-810b-6f63234c67ca?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266" alt="">
                <h3>口语每天联系</h3>
                <span>378002阅读</span>
            </div>
        </div>       
    </div>
    <hr>
    <div class="scroll-lazec">
        <span class="icon iconfont">查看更多分类&#xe658;</span>
    </div>
</div> 
</template>

<script>
import {serial} from "api/home"
export default {
    async created(){
        let data = await serial();
        this.content = data.chapters
        console.log(this.content);
    },
    data(){
        return{
            content:"",
        }
    },
    methods:{
        handle(){
            this.content.reverse();
        }
    }
    
};
</script>

<style scoped>
.love_home{
    width: 100%;
    position: fixed;
    top: 1rem;
    overflow-y: scroll;
    height: 12.34rem;
}

.love {
  width: 100%;
  height: 4rem;
  background-color: darkgray;
  padding: 0.5rem;
  
}

.nov_inif {
  display: flex;
}


.nov_inif img {
  width: 1.8rem;
  height: 2.4rem;
}

.nov_title {
  height: 1rem;
  margin-left: 0.2rem;
  font-size: 0.32rem;
  color: white;
  width: 5rem;
}

.fllow-btn {
  display: inline-block;
  height: 0.4rem;
  width: 1rem;
  font-size: 0.26rem;
  border: 1px solid #f5f5f5;
  text-align: center;
  margin: 0 0 0 0.5rem;
}
.author {
  display: flex;
  margin-top: 0.5rem;
}

.author img {
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.2rem;
}

.foucs {
  font-size: 0.24rem;
  margin: 0.2rem 0 0 0;
}

.options-group{
    width: 100%;
    height: 1.5rem;
}

.options{
    width: 100%;
    height: .5rem;
}

.options p{
   font-size: .28rem;
   margin: .3rem 0 0 .2rem;
}

.group{
    width: 100%;
    height: .5rem;
}

.group span{
    font-size: .28rem;
    
    border-radius: 20%;
    background-color:#757575;
    margin: .3rem 0 0 .4rem;
}

.intros{
    width: 100%;
    height: 1.1rem;
    display: flex;
    align-items: center;
}

.intros a{
    font-size: .28rem;
    margin: 0 .8rem 0 0
}

.iconft{
    font-size: .5rem;
    color: pink;
    margin-left: .6rem;
}

hr{
    border-bottom: .2rem solid #f5f5f5;
}

.book_chapter{
    padding: .3rem .2rem 0 .3rem;
}

.book{
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 .4rem 0.4rem;
    border-bottom: 1px solid #757575;
}

.chapter{
    box-sizing: border-box;
    width: 100%;
    height: 1.2rem;
    font-size: .32rem;
    border-bottom: 1px solid #757575;
       
}

.part{
    height: 100%;
    width: .6rem;;
    color: #b1b1b1;
    font-size: .28rem;
    line-height: .35rem;
    float: left;
}

.info{
    
    margin-top: .5rem;
}

.scroll-lazec.scroll-lazec{
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.scroll-lazec .iconfont{
    font-size: .26rem;
}

.to-title{
    height: .5rem;
    width: 100%;
    font-size: .24rem;
    
}

.noves-group{
    width: 100%;
     display: flex;
     overflow-x: scroll;
}

.noves-copy{
    margin-right: .2rem;
}

.noves-copy img{
    width: 1.8rem;
    height: 2.4rem;
}

.novels-list{
    width: 100%;
    margin: .2rem;
     
}

.meta span{
    font-size: .24rem;
    margin-right: .2rem;
}

</style>
