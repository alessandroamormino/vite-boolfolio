<script>
export default{
  name: 'AppExplorer',
  data(){
    return {
      isVisible: true,
    }
  }, 
  methods: {
    dropdown(){
      this.isVisible = !this.isVisible;
    }
  },
}
</script>
<template>
<div class="explorer">
  <h6>EXPLORER</h6>
  <div>
    <div class="drop">
      <i @click="dropdown()" class="fa-solid fa-angle-down" :class="this.isVisible ? '' : 'hidden'"></i>
      <span>Portfolio</span>
    </div>
    <div v-if="this.isVisible" class="files">
      <div class="home flex">
        <img src="/img/html_icon.svg" alt="" class="explorer-img">
        <router-link :to="{name:'home'}">home.html</router-link>
      </div>
      <div class="about flex">
        <img src="/img/css_icon.svg" alt="" class="explorer-img">
        <router-link :to="{name:'about'}">about.css</router-link>
      </div>
      <div class="projects flex">
        <img src="/img/js_icon.svg" alt="" class="explorer-img">
        <router-link :to="{name:'projects'}">projects.js</router-link>
      </div>
      <div class="github flex">
        <img src="/img/markdown_icon.svg" alt="" class="explorer-img">
        <router-link :to="{name:'github'}">github.md</router-link>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
.explorer{
  display: block;
  // display
  position: relative;
  z-index: 1;
  // position
  padding: 1em;
  width: 200px;
  color: #fff;
  background-color: $explorer-dark;

  font-size: .9em;
  .drop{
    display: flex;
    align-items: center;
    gap: .5em;
    i{
      cursor: pointer;
      font-size: .8em;
      transition: all .4s ease;
      &.hidden{
        transform: rotate(-90deg);
      }
    }
  }
  .files{
    padding: .5em;
    .flex{
      display: flex;
      align-items: center;
      gap: .5em;
    }
  }
  h6{
    margin-bottom: 1em;
    color: #A6ACCE;
  }
  .explorer-img{
    height: 1.2em;
  }
}

// *******************************************
//                  RESPONSIVE
// *******************************************
@media only screen and (max-width: 576px){
    // Explorer:
  .explorer{
    display: none;
  }
}
</style>