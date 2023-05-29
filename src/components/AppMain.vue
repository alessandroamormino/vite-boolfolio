<!-- <script>
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
        <div class="cards">
          <ProjectCard v-for="project in this.store.projects" :project="project"></ProjectCard>
        </div>
    </div>
    <div v-else class="loading-screen">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="button-section">
      <button @click="prevPage()" class="btn btn-secondary">Next Page</button>
      <span>{{ this.currentPage }} / {{ this.lastPage }}</span>
      <button @click="nextPage()" class="btn btn-secondary">Next Page</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main{
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linecap='square' stroke-width='0.5' stroke='hsla(174, 24%, 30%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  color: #fff;
  // tolgo la dimensione della sidebar dalla larghezza del main
  width: calc(100% - 60px - 200px);
  padding: 2em;
  overflow: auto;
  .cards{
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em;
    // flex
    padding: 2em 0;
  }
  .loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 600px;
  }
  .button-section{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 1em;
    // flex
    button, a{
      font-size: 1em;
    }
  }
}


</style> -->

<script>
import MainProjects from './Projects/MainProjects.vue';

export default{
    name: "AppMain",
    data() {
        return {};
    },
    components: { MainProjects }
}
</script>
<template>
  <main>
    <MainProjects></MainProjects>
  </main>
</template>
<style lang="scss" scoped>
main{
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linecap='square' stroke-width='0.5' stroke='hsla(174, 24%, 30%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  color: #fff;
  // tolgo la dimensione della sidebar dalla larghezza del main
  width: calc(100% - 60px - 200px);
  padding: 2em;
  overflow: auto;
}
</style>