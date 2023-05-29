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
  <div class="ui">
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
  </div>
</template>

<style lang="scss" scoped>
  .loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 600px;
  }
</style>
