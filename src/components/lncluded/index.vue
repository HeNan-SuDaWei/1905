<template>
    <div class="lncluded">
        <div class="hzy-m" v-for="(item,index) in content">
            <a href="#" class="hzy-5">

                <h5>{{item.object.data.title}}</h5>
                <p>{{item.object.data.public_abbr}}</p>
            </a>
            <span class="hzy4"><img :src="item.object.data.list_image_url" ></span>
            <div class="hzy-p">
                <i class="iconfont">&#xe675;</i>
                <span>{{ item.object.data.total_fp_amount}}</span>
                <span>{{item.object.data.user.nickname}}</span>
                <i class="iconfont">&#xe66e;</i>
                <span> {{item.object.data.public_comments_count}}</span>
                <i class="iconfont">&#xe6db;</i>
                <span> {{item.object.data.likes_count}}</span>
            </div>
        </div>

        <div class="copy">
            <span>展开更多文章</span><i class="icon iconfont">&#xe658;</i>
        </div>

        <hr>
        <div class="download-guide">
            <a href="href">下载简书，创作你的创作</a>
        </div>
    </div>

</template>

<script>
    import { getHomeLife2 } from "api/home"
    export default {
        name: "lncluded",
        async created() {
            let data = await getHomeLife2();
            console.log(data)
            data.map((item) => {
                item.object.data.total_fp_amount = item.object.data.total_fp_amount / 1000;
            })
            this.content = data;

        },
        data() {
            return {
                content: [],
            }
        }
}
</script>

<style>


</style>