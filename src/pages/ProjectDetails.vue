<script>
// importo lo store
import {store} from '../store.js';

import axios from 'axios';

export default {
  name: 'ProductDetails',
  data(){
    return{
      store,
      project: {},
      projectSlug: '',
      isLoading: true,
      projectFound: false,
    }
  }, 
  mounted() {
    this.projectSlug = this.$route.params.slug;

    this.getProject();
  },
  methods: {
    getProject(){
      // console.log(this.store.URI + 'api/projects/' + this.projectSlug);
      axios.get(this.store.URI + 'api/projects/' + this.projectSlug).then(response => {
        // fermo il caricamento
        this.isLoading = false;

        // controllo se la chiamata è avvenuta con successo
        if(response.data.success){
          this.project = response.data.project;
          this.projectFound = true;
        } else{
          this.projectFound = false;
        }

      });
    }
  }, 
  computed: {
    // letto l'immagine di copertina
    thumb(){
      return this.store.URI + 'storage/' + this.project.thumb;
    }
  }, 

}
</script>
<template>
  <!-- Aggiungo il loader -->
  <div v-if="isLoading" id="spinner-container">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="details">
    <h1>Project: {{ project.title }}</h1>
    <hr>
    <div v-if="projectFound">
      <!-- esiste un progetto dalla chiamata axios -->
      <div class="image">
        <img :src="thumb" :alt="project.title">
      </div>
      
      <div class="type">
        <h5>Type: <em>{{ project.type ? project.type.name : 'No Type'}}</em></h5>
      </div>
      <hr>
      <div class="content">
        <h5>Description:</h5>          
        <p>
          {{ project.content }}
        </p>
      </div>
      <hr>
      <div class="technologies">
        <h5>Technologies:</h5>
        <span v-for="technology in project.technologies" class="badge rounded-pill mx-1" :style="{border:'1px solid' + technology.color}">{{ technology.name }}</span>
      </div>
      <hr>
      <div class="links">
        <h5>Links: </h5>
        <div class="d-flex gap-4">
          <a href="#link-repo" target="_blank">Source Code</a>
          <a v-if="project.website != null" href="#link-website" target="_blank">Website</a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-warning" role="alert">
        No project found.
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
}
.details{
  font-size: .9em;
  .image {
    margin: 2em 0;
    img{
      width: 100%;
      border-radius: 5px;
    }
  }
  .type{
    em{
      font-size: .8em;
    }
  }
  .technologies{
    display: flex;
    align-items: baseline;
    gap: .5em;
    .badge{
      cursor: pointer;
      transition: all .2s ease;
      &:hover{
        background-color: #5c5c5cbb;
      }
    }
  }
  .links{
    a:hover{
      text-decoration: underline;
    }
  }
}
</style>