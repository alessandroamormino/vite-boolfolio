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
    <div v-if="projectFound">
      <!-- esiste un progetto dalla chiamata axios -->
      <div class="image">
        <img :src="thumb" :alt="project.title">
      </div>
      <div class="content">
        <h4>Description:</h4>          
        <p>
          {{ project.content }}
        </p>
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
  .image {
    margin: 2em 0;
    img{
      width: 100%;
      border-radius: 5px;
    }
  }
}
</style>