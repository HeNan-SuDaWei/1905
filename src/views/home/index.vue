<template>
    <div class="home">
        <div class="recommend">
            <div class="top-title">
                <h3 class="special">热门专题</h3>
                <span class="collection-change" @click="handleUpdata(val)">
                    <p class="icon iconfont">&#xe65e;</p>换一批
                </span>
            </div>
            <div class="recommend-collection">
                <router-link v-for="(item,index) in nav[val]" :to="item.path" @click="handleClick(index)" tag="a" :key="index">{{item.title}}</router-link>
            </div>
            <hr>
            <ul class="flow-list-container">
                <li class="not-flow" v-for="(item,index) in content"
                :key="index">
                    <h3 class="title">{{item.object.data.title}}</h3>
                    <span class="warp-img">
                        <img :src="item.object.data.list_image_url" alt="">
                    </span>
                    <p class="abstract">    
                        {{item.object.data.public_abbr}}
                    </p>
                    <i class="icon iconfont"><em class="icont">&#xe675;</em><span class="sp">{{item.object.data.total_fp_amount}}{{item.object.data.user.nickname}}</span></i>
                    <i class="icon iconfont">&#xe606;<span class="sp">{{item.object.data.public_comments_count}}</span></i>
                    <i class="icon iconfont">&#xe6db;<span class="sp">{{item.object.data.likes_count}}</span></i>
                </li>

            <div class="copy">
                <span>展开更多文章</span><i class="icon iconfont">&#xe658;</i>
            </div>

            <hr>
            <div class="download-guide">
                <a href="href">下载简书，创作你的创作</a>
            </div>
 
            </ul>
           <router-view></router-view>
            
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { getHomeNow } from "api/home"

    export default {

        name: "home",
        async created() {

            let data = await getHomeNow()

            data.map((item) => {
                item.object.data.total_fp_amount = item.object.data.total_fp_amount / 1000;
                // this.slug.push( item.object.data.slug)
            })

            this.content = data;
        },
        data() {
            return {
                content: [],
                val: 0,
                // slug:[],
                nav: [
                    [
                        {
                            title: "工作",
                            path: "/work"
                        },
                        {
                            title: "动漫",
                            path: "/cartoon"
                        },
                        {
                            title: "生活",
                            path: "/life"
                        },
                        {
                            title: "小说",
                            path: "/home/novel"
                        },
                    ],
                    [
                        {
                            title: "旅行",
                            path: "/routing/1"
                        },
                        {
                            title: "摄影",
                            path: "/routing/2"
                        },
                        {
                            title: "手绘",
                            path: "/routing/3"
                        },
                        {
                            title: "@IT.互联网",
                            path: "/routing/4"
                        },
                    ],
                    [
                        {
                            title: "工3作",
                            path: "/work"
                        },
                        {
                            title: "动3漫",
                            path: "/cartoon"
                        },
                        {
                            title: "生3活",
                            path: "/life"
                        },
                        {
                            title: "小3说",
                            path: "/novel"
                        }
                    ]
                ]

            }
        },
        methods: {
         
            handleUpdata(val) {
                val++
                if (val > 2) {
                    val = 0
                }
                this.val = val

            }
        }

    }
</script>
<style>
    *{
    margin: 0;
    padding: 0;
}
.data-head{
    width: 100%;
}

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
   
    
}

.title{
    float: left;
    font-size: .34rem;
    width: 70%;
    line-height: .5rem;
    margin-bottom: .1rem
}

.not-flow{
    width: 100%;
    line-height: .35rem;
    margin-bottom: .1rem;
    border-bottom: 1px solid #757575;
     padding: .36rem; 

    
}

.not-flow .iconfont{
    font-size: .32rem;
}



.warp-img{
    float: right;
    margin-top: .2rem;
}

.warp-img img{
     width: 2rem;
    height: 2rem;
    margin-top: .1rem
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

.iconfont .sp{
    font-size: .24rem;
}

.icont{
    color: red;
    font-style:normal;
}
</style>