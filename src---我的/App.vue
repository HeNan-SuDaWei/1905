<template>
  <div id="app">
    <HanderCom/>
    <router-view></router-view>
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
