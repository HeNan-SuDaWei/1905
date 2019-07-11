<template>
    <div class="past">
    
    <div class="lzc-hzy" v-for="(item,index) in content" :key="index">
        <div class="lzc">
            <div class="lzc-box1" >
                <i class="iconfont">&#xe64e;</i>
                <h2>{{item.title}}</h2>
            </div>
            <div class="lzc-box2">
                <span @click="handle(index)">展开全部</span>
                <i class="iconfont">&#xe658;</i>
            </div>
        </div>

        <ul class="lzc-box3" v-if="mag">
            <router-link v-for="(ite,index) in item.categories" :key="index" tag="li" :to="'pay/'+ite.id"><a href="#" >{{ite.name}}</a></router-link>
            
        </ul>
        <ul class="lzc-box4" ref="box2" v-if="!mag">
            <router-link  v-for="(ite,index) in item.categories" :key="index" tag="li" :to="'pay/'+ite.id"><a href="#">{{ite.name}}</a></router-link >
            
        </ul>
    </div>
  

</div>

</template>

<script>
import { Pointstired } from "api/home";

export default {
    name:"Pointstired",
    async created(){
        let data= await Pointstired();
        this.content=data
        console.log(this.content);
    },
    data(){
        return {
            content:"",
            mag:true,
            dd:2, 

        }
    },
    methods:{
        handle(index){

            if(this.dd%2==0){
                this.dd++;
                this.mag=true;
                
            }else{
                this.mag=false;
                this.dd--;
            }
        }
    }
}
</script>
    

<style>
body{
    background: #f5f5f5;
}
header{
    background: #fff;
}
.past{
    width: 100%;
    height: 12.34rem;
    position: fixed;
    top: 1rem;
    overflow-y: scroll;
}

.lzc{
    
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: .4rem .2rem 0;
}

.lzc-box1{
    display: flex;
   
}
.lzc-box1 i{
    font-size: .4rem;
    color: pink;
    margin-right: 0.08rem;
}
.lzc-box1 h2{
    font-size: .36rem;
    font-weight: normal;
}


.lzc-box2{
    display: flex;
    color: #999;
}



.lzc-box2 span{
    padding-right: 0.08rem;
}


.lzc-box3{
    width: 100%;
    display: flex;
    margin-top: .3rem;
    padding: 0 .1rem;
    flex-wrap: wrap;
    box-sizing: border-box;
    flex: 1;
    height: 2.4rem;
    overflow: hidden;
    
}


.lzc-box3 li {
   box-sizing: border-box;
   width: 24%;
   padding: 0 .1rem .4rem;
   text-align: center;
}

.lzc-box3 li a{
    display: block;
    width: 1.65rem;
    padding: .24rem .1rem;
    font-size: .28rem;
    color: #555;
    border-radius: .6rem;
    background-color: #f5f5f5;
}



.lzc-box4{
    width: 100%;
    display: flex;
    margin-top: .3rem;
    padding: 0 .1rem;
    flex-wrap: wrap;
    box-sizing: border-box;

    
}



.lzc-box4 li {
   box-sizing: border-box;
   width: 24%;
   padding: 0 .1rem .3rem;
   text-align: center;
}

.lzc-box4 li a{
    display: block;
    padding: .24rem .2rem;
    font-size: .28rem;
    color: #555;
    border-radius: .6rem;
    background-color: #f5f5f5;
}


.lzc-hzy{
    background: #fff;
    margin-top: .3rem;
}
</style>
