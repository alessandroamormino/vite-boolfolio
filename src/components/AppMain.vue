<script>
// importo lo store
import {store} from '../store.js';
// importo axios
import axios from 'axios';

// importo i componenti
import ProjectCard from './Projects/ProjectCard.vue';

export default {
  name: 'AppMain',
  data(){
    return{
      store,
      currentPage: 1,
      lastPage: '',
    }
  }, 
  components: {
    ProjectCard,
  },    
  methods: {
    // funzione che fa la chiamata axios
    getProjects(){
      axios.get(this.store.URI+this.store.API + '?page=' + this.currentPage).then(response => {
        console.log(response.data.results);
        this.store.projects = response.data.results.data;
        this.lastPage = response.data.results.last_page;
      });
    }, 
    nextPage(){
      if(this.currentPage == this.lastPage){
        this.currentPage = 1;
      } else {
        this.currentPage++;
      }
      this.getProjects();
    }, 
    prevPage(){
      if(this.currentPage == 1){
        this.currentPage = this.lastPage;
      } else {
        this.currentPage--;
      }
      this.getProjects();
    }
  }, 
  created(){
    this.getProjects();
  }
}
</script>

<template>
  <main>
    <div v-if="this.store.projects.length > 0">
      <h1>All Projects</h1>
      <div class="row">
        <div v-for="project in this.store.projects" class="col-4">
          <ProjectCard :project="project"></ProjectCard>
        </div>
      </div>
    </div>
    <div v-else class="loading-screen">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="button-section">
      <button @click="prevPage()" class="btn btn-secondary">Next Page</button>
      <span>Page: {{ this.currentPage }} / {{ this.lastPage }}</span>
      <button @click="nextPage()" class="btn btn-secondary">Next Page</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 600px;
  }

  main{
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linecap='square' stroke-width='0.5' stroke='hsla(174, 24%, 30%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    color: #fff;
    // tolgo la dimensione della sidebar dalla larghezza del main
    width: calc(100% - 60px - 200px);
    padding: 2em;
    overflow: auto;
    .container-centered{
      width: calc(100% - 60px - 2em - 200px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2em;
      // flex
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      // position
    h1{
      font-size: 4em;
    }
    h3{
      position: relative;
      font-size: 2em;
      width: fit-content;
      span::after{
        content: '';
        position: absolute;
        bottom: 0;
        // right: -.5em;
        margin-left: .5em;

        // animation
        animation: blinker .8s ease infinite alternate-reverse 1s;

        width: .2rem;
        height: 1em;
        background-color: #80CBC4;
      }
    }
    .info{
      display: flex;
      flex-flow: column nowrap;
      // flex
      .buttons{
        padding: 2em 0;
        font-size: 1.2em;
        ._btn{
          padding: .4em 1em;
          border: 1px solid #80CBC4;
        }
        ._btn-primary{
          position: relative;
          opacity: 0;
          animation: btn1 .7s ease forwards 1s, blinker-btn .8s infinite alternate-reverse;
          // animation
          background-color: #80CBC4;
          margin-right: 1em;
          transition: transform .4s ease;
          &:hover{
            transform: scale(.95);
          }
        }
        ._btn-secondary{
          position: relative;
          opacity: 0;
          animation: btn2 .7s ease forwards 1s;
          // animation
          background-color: #2A2D3E;
          color: #fff;
          transition: background-color .4s ease;
          &:hover{
            background-color: #80CBC4;
            color: #000;
          }
        }
      }
    }
    .svg-image{
      svg{
        width: 500px;
      }
    }
  }
  .svg-image-box{
    position: absolute;
    top: 200px;
    right: 300px;
    svg#small1{
      position: absolute;
      top: 100px;
      right: 50px;
      width: 100px;
    }
    svg#small2{
      position: absolute;
      top: 180px;
      right: 90px;
      width: 100px;
    }
    svg#small3{
      position: absolute;
      top: 90px;
      right: 150px;
      width: 100px;
    }
  }
  .homepage{
    h1.first{
      position: relative;
      opacity: 0;
      animation: first .7s ease forwards;
    }
    h1.second{
      position: relative;
      opacity: 0;
      animation: second .7s ease forwards .4s;
    }
    h3.third{
      position: relative;
      opacity: 0;
      animation: third .7s ease forwards .6s;
    }
  }
}


</style>
