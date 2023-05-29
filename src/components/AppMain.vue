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
    }
  }, 
  components: {
    ProjectCard,
  },    
  methods: {
    // funzione che fa la chiamata axios
    getProjects(){
      axios.get(this.store.URI+this.store.API).then(response => {
        console.log(response.data.results);
        this.store.projects = response.data.results;
      });
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
    </main>
  </div>
</template>

<style lang="scss" scoped>
</style>
