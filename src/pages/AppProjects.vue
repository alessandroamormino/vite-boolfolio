<script>
// importo lo store
import {store} from '../store.js';
// importo axios
import axios from 'axios';

// importo i componenti
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'AppProjects',
  data(){
    return{
      store,
      currentPage: 1,
      lastPage: '',
      selectedTypeId: '',
      isLoading: true,
      projectsFound: false,
      types: [],
    }
  }, 
  components: {
    ProjectCard,
  },    
  methods: {
    // funzione che fa la chiamata axios
    getProjects(){
      axios.get(this.store.URI+this.store.API + '?page=' + this.currentPage + '&type_id=' + this.selectedTypeId).then(response => {
        // console.log(response);

        // stoppo il caricamento
        this.isLoading = false;

        // controllo se la chiamata è avvenuta con successo
        if(response.data.success){
          this.store.projects = response.data.results.data;
          this.lastPage = response.data.results.last_page;
          this.types = response.data.allTypes;
          this.projectsFound = true;
        } else {
          this.projectsFound = false;
        }


      });
    }, 
    // nextPage(){
    //   if(this.currentPage == this.lastPage){
    //     this.currentPage = 1;
    //   } else {
    //     this.currentPage++;
    //   }
    //   this.getProjects();
    // }, 
    // prevPage(){
    //   if(this.currentPage == 1){
    //     this.currentPage = this.lastPage;
    //   } else {
    //     this.currentPage--;
    //   }
    //   this.getProjects();
    // }, 
    updatePage(index){
      this.currentPage = index + 1;
      this.getProjects();
    }
  }, 
  created(){
    this.getProjects();
  }
}
</script>

<template>
    <div v-if="this.store.projects.length > 0">
      <h1>Stuff i've built so far</h1>
      <!-- creo una select per filtrare la tipologia del progetto -->

      <form @submit.prevent="" action="" class="d-flex gap-3">
        <span>Search for Type:</span>
        <select name="type_id" id="type_id" v-model="selectedTypeId" @change="getProjects()">
          <option value="">All</option>
          <option v-for="singleType in types" :value="singleType.id">{{ singleType.name }}</option>
        </select>
      </form>
      <div v-if="!isLoading">
        <div v-if="projectsFound">
          <div class="cards">
            <ProjectCard v-for="project in this.store.projects" :project="project"></ProjectCard>
          </div>
          <div class="button-section">
            <!-- <button @click="prevPage()" class="btn btn-secondary">&lt;</button> -->
            <!-- <span>{{ this.currentPage }} / {{ this.lastPage }}</span> -->
            <div @click="updatePage(index)" v-for="(pages, index) in lastPage" class="bullet" :class="(index + 1)==currentPage ? 'active' : ''"></div>
            <!-- <button @click="nextPage()" class="btn btn-secondary">></button> -->
          </div>
        </div>
        <div v-else>
          <div class="alert alert-warning" role="alert">
            No project found
          </div>
        </div>
      </div>
      <div v-else class="loading-screen">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else class="loading-screen">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
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
  .bullet{
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid $light-blue;
    cursor: pointer;
    &.active{
      background-color: $light-blue;
    }
  }
}
.alert{
  margin-top: 2em;
}


</style>
