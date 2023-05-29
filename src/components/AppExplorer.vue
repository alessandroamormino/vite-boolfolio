<script>
// importo lo store
import {store} from '../store.js';


export default{
  name: 'AppExplorer',
  data(){
    return {
      store,
    }
  }, 
  methods: {
    setActiveLink(index){
      this.store.activeLink = index;
    }
  }
}
</script>
<template>
<div class="explorer">
  <h6>EXPLORER</h6>
  <div>
    <div class="drop">
      <i class="fa-solid fa-angle-down"></i>
      <span>Portfolio</span>
    </div>
    <div class="files">
      <div class="home flex">
        <img src="/img/html_icon.svg" alt="" class="explorer-img">
        <a @click="setActiveLink(0)" href="#">home.html</a>
      </div>
      <div class="about flex">
        <img src="/img/css_icon.svg" alt="" class="explorer-img">
        <a @click="setActiveLink(1)" href="#">about.css</a>
      </div>
      <div class="projects flex">
        <img src="/img/js_icon.svg" alt="" class="explorer-img">
        <a @click="setActiveLink(2)" href="#">projects.js</a>
      </div>
      <div class="github flex">
        <img src="/img/markdown_icon.svg" alt="" class="explorer-img">
        <a @click="setActiveLink(3)" href="#">github.md</a>
      </div>
      <div class="contact flex">
        <img src="/img/json_icon.svg" alt="" class="explorer-img">
        <a @click="setActiveLink(4)" href="#">contact.json</a>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.explorer{
  display: block;
  // display
  position: relative;
  z-index: 1;
  // position
  padding: 1em;
  // width: 10vw;
  width: 200px;
  color: #fff;
  background-color: #1A1D2A;

  font-size: .9em;
  .drop{
    display: flex;
    align-items: center;
    gap: .5em;
    i{
      font-size: .8em;
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
</style>