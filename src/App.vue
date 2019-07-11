<template>
  <div id="app">
    <router-view></router-view>
    
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
