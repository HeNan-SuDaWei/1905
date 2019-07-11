<template>
    <div class="lzc">
        <div class="lzc-1">
        <p class="lzc-p">共为您找到468部该标签下的连载作品</p>
        <div class="lzc-book-warp" v-for="(itme,index) in content" :key="index">
            <div class="lzc-book">
                <span class="lzc-mm">付费</span>
                <div class="lzc-pic" >
                    <img :src="itme.image_url" alt="">
                </div>

                <div class="lzc-into">
                    <p class="lzc-title">{{itme.name}}</p>
                    <div class="lzc-cc">
                        <span style=" box-sizing: border-box;">
                            <img class="lzc-photo"
                                :src="itme.user.avatar">
                            <span class="lzc-name">{{itme.user.nickname}}</span>
                        </span>
                        <span class="lzc-read">{{itme.views_count}}阅读</span>
                    </div>
                </div>
            </div>
        </div>

    
        
    
    </div>

    </div>
</template>
<script>
import {Pay} from "api/home"
export default {
    name:"pay",

  async  created(){
      let id = this.$route.params.id
        var data=await Pay(id)
        this.content=data.books;
        console.log(this.content)
    },
    data(){
        return{
            content:"",
        }
        
    }
};
</script>

<style>
.lzc{
    height: 12.34rem;
    position: fixed;
    top: 1rem;
    overflow: scroll;
}

body{
    background-color: #f5f5f5;
}
.lzc-1{
    box-sizing: border-box;
    background-color: #f5f5f5;
    padding: .3rem .2rem;
}

.lzc-1 .lzc-p{
    max-width: 19.2rem;
    margin: 0 auto .1rem;
    padding-left: .1rem;
    font-size: .24rem;
    color: #999;
}

.lzc-book-warp{
    box-sizing: border-box;
    padding: .1rem;
    width: 33.33%;
    float: left;
}

.lzc-book{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}


.lzc-book .lzc-mm{
    position: absolute;
    top: 0;
    left: 0;
    width: .6rem;
    height: .3rem;
    background-color: #e2b882;
    font-size: .2rem;
    line-height: .3rem;
    color: #fff;
    text-align: center;
    z-index: 10;
    border-radius: 0 0 4px 0;
}



.lzc-pic{
    display: block;
    height: 0;
    width: 100%;

    background-position: 50%;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    background-color: #eee;
    width: 2.4rem;
    height: 3.2rem;
    
} 

.lzc-pic img{
    width: 2.4rem;
    height: 3.2rem;
}

.lzc-cc{
    position: relative;
    display: block;
    height: .48rem;
}
.lzc-into{
    height: 2rem;
    box-sizing: border-box;
}

.lzc-title{
    font-size: .34rem;
    margin: .12rem 0;
    color: #2f2f2f;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: .42rem;
    max-height: .84rem;
    
    white-space: normal;
}
.lzc-into{
    height: 2rem;
    box-sizing: border-box;
}
.lzc-photo{
    position: absolute;
    left: 0;
    top: -1px;
    display: block;
    width: .32rem;
    height: .32rem;
    border-radius: 50%;
    max-width: 100%;
}

.lzc-name{
    display: block;
    height: .56rem;
    
    font-size: .24rem;
    color: #999;
    transform-origin: left top;
    padding-left: .4rem;
}

.lzc-read{
    display: block;
    height: .56rem;
    width: 200%;
    font-size: .24rem;
    color: #999;
}
</style>
