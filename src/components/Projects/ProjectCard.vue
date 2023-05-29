<script>
// importo lo store
import {store} from '../../store.js';


  export default{
    name: 'ProjectCard',
    data(){
      return{
        store,
      }
    }, 
    props: {
      project: Object,
    },
    created(){
      // console.log(this.store.projects);
    },  
  }
</script>

<template>
  
  <div class="card-projects">
    <img src="" alt="... image">
    <div class="content">
      <h1>{{project.title}}</h1>
      <h6>Type: </h6>
      <hr>
      <p>{{ project.content }}</p>
      <div class="d-flex mt-2"> 
        <!-- <span class="badge rounded-pill mx-1" style="border: 1px solid {{$tech->color}}">{{$tech->name}}</span> -->
      </div>
      <div class="links">
        <a href="#link-repo" target="_blank">Source Code</a>
        <a href="#link-website" target="_blank">Website</a>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
</style>