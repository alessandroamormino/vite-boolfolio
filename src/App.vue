<script>
import AppExplorer from './components/AppExplorer.vue';
import AppMain from './components/AppMain.vue';
import AppSide from './components/AppSide.vue';
export default {
  data(){
    return{

    }
  }, 
  components: {
    AppMain,
    AppSide,
    AppExplorer
}
}
</script>

<template>
  <div class="ui">
    <AppSide></AppSide>
    <AppExplorer></AppExplorer>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
</style>
