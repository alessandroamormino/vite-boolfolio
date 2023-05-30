<script>
// importo lo store
import {store} from '../store.js';

export default {
  data(){
    return{
      store,
    }
  }, 
  computed: {
    detailSlug(){
      return parseInt(this.$route.params.slug);
    }
  }
}
</script>
<template>
  <h1>Product Detail: {{ $route.params.slug }}</h1>
</template>
<style lang="scss" scoped></style>