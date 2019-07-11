<template>
    <div class="listContnt">
        <div>

        </div>
        <h1>{{content.public_title}}</h1>
        <div class="sdw-author">
            <img :src="content.user.avatar" alt="" class="sdw-img1">
            <h5>{{content.user.nickname}}</h5>
            <a href="#" :v-if="content.user.badges.length?content.user.badges[0].text:'简书作者'">简书作者 </a>
        </div>
        <p>
            <i class="icon iconfont"><em class="icont">&#xe675;</em></i>
            <span>{{content.total_fp_amount}}</span>&nbsp;
            <span>{{content.first_shared_at}}</span>
        </p>


        <div v-html="content.free_content" class="sdw-2" ref="content2">
            <img :src="content.share_image_url" alt="">
        </div>
        <div v-html="content.free_content" class="sdw-1" ref="content1">
            <img :src="content.share_image_url" alt="">
        </div>


        <div class="sdw-load" ref="xiala">
            <button class="sdw-btn1">
                <div @click="handleXiala()"></div>
            </button>
            <button class="sdw-btn2">阅读全文，请打开APP</button>
        </div>
        <div class="sdw-container">
            <div class="xian"></div>
            <p><span>点赞赚砖</span><span class="sdw-s1">自高日赚千砖</span></p>
        </div>
        <div class="sdw-liu">
            6
        </div>
        <div class="sdw-author-footer">
            <img :src="content.user.avatar" alt="" class="sdw-img1">&nbsp;
            <div>
                <h3>{{content.user.nickname}}</h3>
                <span>小礼物走一走，来简书关注我</span>
            </div>
            <div class="sdw-appreciate">赞赏</div>
        </div>
        <div class="sdw-recommend">
            <h3>推荐阅读</h3>
            <span>更多精彩内容&nbsp;&nbsp;&gt;</span>
        </div>
        <ul>
            <li v-for="(item,index) in content_1" class="sdw-recommend-list" >
                <h2>{{item.object.data.title}}</h2>
                <div class="sdw-hzy">
                    <img :src="item.object.data.user.avatar" alt="" class="sdw-img1">
                    <h5>{{item.object.data.user.nickname}}</h5>
                    app中阅读
                    <i class="icon iconfont"><em class="icont">&#xe675;</em><span class="sp">{{item.object.data.views_count}}</span></i>
                    <i class="icon iconfont">&#xe606;<span class="sp">{{item.object.data.public_comments_count}}</span></i>
                    <i class="icon iconfont">&#xe6db;<span class="sp">{{item.object.data.likes_count}}</span></i>
                </div>
            </li>   
        </ul>
        <div class="download-guide">
            <a href="javascript:;">下载简书，创作你的创作</a>
        </div>
    </div>

</template>


<script>
    import { getContent, getContentPinLun } from "api/home"
    export default {
        name: "listContent",
        async created() {
            let id = this.$route.params.id;
            console.log(id)
            let data = await getContent(id)
            // console.log(content.user.avatar)  
            data.total_fp_amount = data.total_fp_amount / 1000;
            this.content = data
            let data1 = await getContentPinLun(id)
            this.content_1 = data1
            console.log(data1)
            // data1.map((item)=>{
            //     console.log(item)
            // })    
        },
        data() {
            return {
                content: [],
                content_1: [],
                // img:[
                //     {
                //         backgroundImage:"url("+require()+")"
                //     }
                // ]
            }
        },
        methods: {

            handleXiala() {
                console.log(this.$refs.content2)
                this.$refs.xiala.style.display = 'none';
                this.$refs.content1.style.display = 'none';
                this.$refs.content2.style.display = 'block';
            }
        },
        //     updatd(){
        //         let _height = this.$refs.content2.style.height;
        //         console.log(_height)
        //         if(_height < 1000){
        //             this.$refs.xiala.style.display = 'none';
        //             this.$refs.content1.style.display = 'none';
        //             this.$refs.content2.style.display = 'block';
        //         }
        //     }     

    }
</script>


<style>
    h1 {
        font-weight: 900;
    }

    .listContnt {
        position: fixed;
        top: 1rem;
        overflow-y: auto;
        height: 12.344rem;
        padding: 0 .2rem;
    }

    .sdw-author {
        display: flex;
        align-items: center;
    }

    .sdw-author h5 {
        margin: 0 .1rem;

    }

    .sdw-1 {
        height: 10rem;
        overflow: hidden;
        font-size: .36rem;
    }

    .sdw-2 {
        display: none;
    }

    .sdw-load {
        height: 2.668rem;
        text-align: center;
    }

    button {
        user-select: none;
        text-align: center;
        border: none;
        background-color: transparent;
    }

    .sdw-btn1 {
        display: block;
        width: 100%;

    }

    .sdw-btn1 div {
        margin: .5rem auto;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #217AFF;


    }

    .sdw-btn2 {
        width: 4rem;
        background: red;
        height: 1rem;
        font-size: 30px;
        color: #f5f5f5;
        border-radius: .5rem;

    }

    .sdw-img1 {
        height: .68rem;
        width: .68rem;
        border-radius: 50%;
    }

    .sdw-container {
        height: 1.62rem;
        position: relative;
        padding: .5rem 0;
    }

    .xian {
        width: 100%;
        position: absolute;
        top: .81rem;
        height: 1px;
        background: #ddd;
        z-index: 0;
    }

    .sdw-container p {
        font-size: 32px;
        font-weight: 400;
        line-height: .62rem;
        color: #2f2f2f;
        text-align: center;
        background: #fff;
    }

    .sdw-container p .sdw-s1 {
        color: red;
    }

    .sdw-liu {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: 1px solid #ddd;
        text-align: center;
        font-size: .7rem;
        line-height: 1.2rem;
        margin: .2rem auto;
        font-weight: 900;
    }

    .sdw-author-footer {
        background: #fafafa;
        display: flex;
        height: 1.32rem;
        align-items: center;
    }

    .sdw-appreciate {
        height: .72rem;
        background: red;
        color: #fff;
        font-size: .32rem;
        text-align: center;
        line-height: .72rem;
        padding: 0 .4rem;
        border-radius: .5rem;
        margin-left: 1.5rem;
    }

    .sdw-recommend {
        display: flex;
        justify-content: space-between;
        padding: .2rem 0;
    }

    .sdw-recommend-list {
        height: 2.4rem;
        margin-top: .2rem;
        background:yellow;
        padding-top: .2rem;
        position: relative;
    }

    .sdw-recommend-list h2 {
        max-height: .88rem;
        margin: 0 0.4rem;
    }
    .sdw-hzy{
        display: flex;
        position: absolute;
        bottom: .2rem;
        align-items: center;
        padding: 0 .2rem;
    }
    .sdw-hzy i{
        padding-right: 2px;
        margin-right: 3px;
        font-size: .3rem;
    }
    .sdw-hzy .sp{
        padding-right: 2px;
        font-size: .3rem;
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
</style>