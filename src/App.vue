<template>
  <div id="app">
    <keep-alive><router-view></router-view></keep-alive>
    
    <HanderCom/>
    
  </div>
</template>
<script>
  import HanderCom from "./common/handerCom/index.vue"
  export default{
    components:{
        HanderCom
    } 
  }

</script>
<style >

</style>
