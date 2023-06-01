<script>
import AppExplorer from './components/AppExplorer.vue';
import AppFooter from './components/AppFooter.vue';
import AppSide from './components/AppSide.vue';
import AppToolbar from './components/AppToolbar.vue';

// importo lo store
import {store} from './store.js';

export default {
  data(){
    return{
      store,
    }
  }, 
  components: {
    AppSide,
    AppExplorer,
    AppToolbar,
    AppFooter
}
}
</script>

<template>
  <AppToolbar></AppToolbar>
  <div class="ui" :class="this.store.darkMode ? 'dark-mode' : 'light-mode'">
    <AppSide></AppSide>
    <AppExplorer></AppExplorer>
    <main>
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <div :key="$route.path">
            <component :is="Component" ></component>
          </div>
        </transition>
      </router-view>
    </main>
  </div>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>

// transition pages
.fade-enter-active,
.fade-leave-active{
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

main{
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linecap='square' stroke-width='0.5' stroke='hsla(174, 24%, 30%, 0.4)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  color: #fff;
  // tolgo la dimensione della sidebar dalla larghezza del main
  width: calc(100% - 60px - 200px);
  padding: 2em;
  overflow: auto;
}

// *******************************************
//                  RESPONSIVE
// *******************************************
@media only screen and (max-width: 576px){
  main{
      width: calc(100% - 60px);
  }
}
</style>http://localhost:5173/#
