<template>

    <section>
        <div class="he">
            <div class="he1">
                <img :src="content.image">
            </div>

            <div class="he2" ref="an">
                <h3>{{content.title}}</h3>
                <i>{{content.owner.nickname}}</i><span> 编，{{content.notes_count}}万篇文章， {{content.subscribers_count}}万人关注</span>
                <div class="conent-text" v-html="content.content_in_full"></div> 
            </div>
                <span class="icon iconfont icont" @click="extension()" ref="hzy">&#xe658;</span>

        </div>
                <div class="he-an">+&nbsp;关注</div>
        <hr/>
        <ul class="hzy-k">
            <li>最新收入</li>
            <li>最新评论</li>
            <li>热门</li>
        </ul>
        <div class="hzy-m">
            <a href="#" class="hzy-5">
                
                <h5>除了我，谁会安利这部破名字的好剧</h5>
                <p>今年的好剧，有一部Sir迟迟没有推荐。 它慢，但后劲足的，就万不能...</p>
            </a>
            <span class="hzy4"><img></span>
            <div class="hzy-p">
                <i class="iconfont">&#xe675;</i>
                <span>0.078</span>
                <span>sir电影</span>
                <i class="iconfont">&#xe66e;</i>
                <span>0</span>
                <i class="iconfont">&#xe6db;</i>
                <span>2</span>
            </div>
        </div>
        <div class="hzy-m">
            
            <p>{{id}}</p>
                <a href="#" class="hzy-5">
                    
                    <h5>除了我，谁会安利这部破名字的好剧</h5>
                    <p>今年的好剧，有一部Sir迟迟没有推荐。 它慢，但后劲足的，就万不能...</p>
                </a>
                <span class="hzy4"><img></span>
                <div class="hzy-p">
                    <i class="iconfont">&#xe675;</i>
                    <span>0.078</span>
                    <span>sir电影</span>
                    <i class="iconfont">&#xe66e;</i>
                    <span>0</span>
                    <i class="iconfont">&#xe6db;</i>
                    <span>2</span>
                </div>
            </div>
            <div class="hzy-m">
                    <a href="#" class="hzy-5">
                        
                        <h5>除了我，谁会安利这部破名字的好剧</h5>
                        <p>今年的好剧，有一部Sir迟迟没有推荐。 它慢，但后劲足的，就万不能...</p>
                    </a>
                    <span class="hzy4"><img></span>
                    <div class="hzy-p">
                        <i class="iconfont">&#xe675;</i>
                        <span>0.078</span>
                        <span>sir电影</span>
                        <i class="iconfont">&#xe66e;</i>
                        <span>0</span>
                        <i class="iconfont">&#xe6db;</i>
                        <span>2</span>
                    </div>
                </div>

    </section>


</template>

<script scoped>
import { routing } from "api/home";
import { photography } from "api/home";
import { handpainted } from "api/home";
import { Internet } from "api/home";

export default {
  name: "routing",
  props: ["id"],
  data() {
    return {
      content: ""
    };
  },
  async mounted() {
    let data = "";
    switch (this.id) {
      case "1":
        data = await routing();
        this.content = data;

        break;
      case "2":
        data = await photography();
        this.content = data;

        break;
      case "3":
        data = await handpainted();
        this.content = data;

        break;
      case "4":
        data = await Internet();
        this.content = data;

        break;
    }
    console.log(this.content);
    this.content.notes_count = (this.content.notes_count / 10000).toFixed(1);
    this.content.subscribers_count = (
      this.content.subscribers_count / 10000
    ).toFixed(1);
  },
  methods: {
   
  }
};
</script>

<style scoped>
.icont {
  font-size: 0.24rem;
  position: absolute;
  top: 2.1rem;
  left: 5.3rem;
}

.he {
  box-sizing: border-box;
  padding: 0.5rem 0 0.3rem;
  font-size: 0.24rem;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.he1 {
  float: left;
  width: 1.44rem;
  height: 1.4rem;
  margin-right: 0.26rem;
}

.he1 img {
  width: 1.5rem;
  height: 1.5rem;
}

.he2 {
  float: left;
  width: 5rem;
  
  overflow: hidden;
}

.he2 > h3 {
  font-size: 0.4rem;
}

.he2 > i {
  color: #3194d0;
  font-style: normal;
}

.he2 > span {
  color: #969696;
  font-size: 0.28rem;
}

.blue-link {
  color: #3194d0;
}

br {
  font-size: 0.28rem;
}
.he2 > .hzy-p1 {
  margin-top: 0.12rem;
  font-size: 0.28rem;
}

.he2 > .hzy-p2 {
  font-size: 0.28rem;
}

.he2 > a {
  color: #3194d0;
}

.he-an {
  display: flex;
  width: 5rem;
  height: 0.8rem;
  background: #42c02e;
  color: #fff;
  font-size: 0.36rem;
  justify-content: center;
  align-items: center;
  margin: 0.24rem 0 0.24rem 1.6rem;
  padding: 6px 0;
}

hr {
  margin-left: -18px;
  margin-right: -18px;
  border-width: 0;
  height: 10px;
  background-color: #f5f5f5;
}

.hzy-k {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 0.3rem;
  border-bottom: 1px solid #ccc;
}

.hzy-k > li {
  padding: 12px 0;
  margin: -1px 0;
}

section {
  position: fixed;
  top: 1rem;
  height: 12.34rem;
  overflow-y: scroll;
}
.hzy-m {
  padding: 0.3rem;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}

.hzy-m h5 {
  font-size: 0.36rem;
  color: #000;
}

.hzy-5 {
  float: left;
}

.hzy-m .hzy-5 {
  display: block;
  width: 4.5rem;
}
.hzy-5 > p {
  height: 0.64rem;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin-top: 0.1rem;
  line-height: 0.3rem;
  font-size: 0.28rem;
}

.hzy4 {
  display: block;
  float: right;
  width: 1.4rem;
  height: 1.4rem;
  margin-top: 0.4rem;
}
.hzy4 img {
  width: 100%;
  height: 100%;
}

.hzy-p {
  margin-top: 0.4rem;
  float: left;
}

.hzy-p i {
  padding-right: 2px;
  margin-right: 3px;
}
.hzy-p span {
  padding-right: 2px;
}
</style>
