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
  }

}
</script>
<template>
  <h1>Project: {{ project.title }}</h1>
</template>
<style lang="scss" scoped></style>