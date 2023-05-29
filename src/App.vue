<script>
import AppMain from './components/AppMain.vue';
import AppSide from './components/AppSide.vue';
export default {
  data(){
    return{

    }
  }, 
  components: {
    AppMain,
    AppSide
}
}
</script>

<template>
  <div class="ui">
    <AppSide></AppSide>
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss" scoped>
</style>
