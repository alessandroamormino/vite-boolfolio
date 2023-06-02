<script>
// importo lo store
import {store} from '../store.js';


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
    computed: {
      // letto l'immagine di copertina
      thumb(){
        return this.store.URI + 'storage/' + this.project.thumb;
      }
    },  

  }
</script>

<template>
  
  <div class="card-projects">
    <img :src="thumb" alt="{{ project.title }} image">
    <div class="content">
      <h1>{{project.title}}</h1>
      <h6>Type: {{ project.type ? project.type.name : 'none' }}</h6>
      <hr>
      <p>{{ project.content }}</p>
      <div class="d-flex mt-2 flex-wrap gap-1"> 
        <span v-for="technology in project.technologies" class="badge rounded-pill mx-1" :style="{border:'1px solid' + technology.color}">{{ technology.name }}</span>
      </div>
      <div class="links">
        <a v-if="project.repo" :href="project?.repo" target="_blank">Source Code</a>
        <a v-if="project.website != null" href="#link-website" target="_blank">Website</a>
        <router-link :to="{name: 'project-detail', params: {slug: project.slug}}">Details</router-link>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
.card-projects{
  display: flex;
  flex-flow: column nowrap;
  // flex
  width: 500px;
  border-radius: 10px;
  background-color: $explorer-dark;

  overflow: hidden;

  filter: opacity(.4);

  transition: all .2s ease;
  &:hover{
    // transform: scale(1.02);
    box-shadow: 10px 10px 10px rgba(0,0,0,.2);
    filter: opacity(1);
  }
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top center;
  }
  .content{
    padding: 1em;

    h1{
      font-size: 1.2em;
    }
    h6, p{
      font-size: .8em;
    }
    .links{
      display: flex;
      gap: 2em;
      margin-top: 1em;

      font-size: .9em;
      a:hover{
        text-decoration: underline;
      }
    }
    .badge{
      cursor: pointer;
      transition: all .2s ease;
      &:hover{
        background-color: #5c5c5cbb;
      }
    }
  }
}


</style>