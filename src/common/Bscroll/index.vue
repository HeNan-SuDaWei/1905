<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
    name:"Bscroll",
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper,{
            pullUpLoad:true
        });
        
    },
    methods:{
        handlepullingUp(cb){
            this.scroll.on("pullingUp",()=>{               
                cb();
            })
        }
    }
}
</script>

<style>
.wrapper{
        height: 100%;
    }
</style>
