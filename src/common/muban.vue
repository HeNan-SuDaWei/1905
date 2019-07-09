<template>
    <div class="muban">
        
    </div>
</template>

<script>
import { routing } from "api/home"
export default {
   async created(){
       let a=await routing()
       console.log(a)
   }
}
</script>

<style>

</style>
