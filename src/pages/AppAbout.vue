<script>
export default {
  name: 'AppAbout',
  data(){
    return{
      backEnd: [
        {
          name: 'PHP',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
        },
        {
          name: 'MySql',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
        },
        {
          name: 'Laravel',
          path: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg'
        },
        {
          name: 'Git',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
      ],
      frontEnd: [
        {
          name: 'HTML',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
          name: 'CSS',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
          name: 'Sass',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
        },
        {
          name: 'JS',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
          name: 'Vue',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
        },
        {
          name: 'Vite',
          path: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'
        },
        {
          name: 'Bootstrap',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
        },
      ], 
      programs: [
        {
          name: 'GitHub',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
          name: 'VSCode',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
        {
          name: 'Figma',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'MacOS',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
        },
        {
          name: 'Postman',
          path: 'https://www.svgrepo.com/show/354202/postman-icon.svg'
        },
      ]
    }
  }
}
</script>
<template>
  <h1>About me..</h1>
  <hr>
  <p>
    Hi, I’m Alessandro Amormino, and I’m 26 years old. 
    <br>
    <br>
    I remember when I was 12 and my father bought me my first computer because he saw how I liked using his. 
    After playing with it a couple of times I decided to disassemble it to see what it looked like. 
    <br>
    <br>
    It was only after I’ve rebuild	 it (with missing pieces, but it still worked!) that I’ve developed the curiosity to learn how things works.
    <br>
    <br>
    From that moment I started to find out more about technologies in general, studying in the evening and sharing the knowledge with a friend. 
    In the upcoming years I found the thing that made me fall in love with this world: programming. 
    <br>
    <br>
    The most fascinating thing is to type something with a keyboard and actually create stuff from nothing!
    <br>
    <br>
    I’m always curios to learn new stuff and transform this passion into my everyday work.
  </p>
  <h3>Things i use:</h3>
  <hr>
  <div class="technologies">
    <div class="titles">
      <h5>Front-End</h5>
      <h5>Back-End</h5>
    </div>
    <div class="columns">
      <div class="column">
        <div v-for="image in this.frontEnd" class="tech front">
          <img :src="image.path" alt="{{image.name}}"> 
          <div class="name">{{image.name}}</div>
        </div>
      </div>
      <div class="column">
        <div v-for="image in this.backEnd" class="tech back">
          <img :src="image.path" alt="{{image.name}}"> 
          <div class="name">{{image.name}}</div>
        </div>
      </div>
    </div>
    <div class="titles">
      <h5>Programs</h5>
    </div>
    <div class="column big">
      <div v-for="image in this.programs" class="tech programs">
        <img :src="image.path" alt="{{image.name}}"> 
        <div class="name">{{image.name}}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
p{
  margin: 3em 0;
}
.technologies{
  // flex
  margin-top: 2em;
  .titles{
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
  }
  .columns{
    display: flex;
    gap: 2em;
  }
  .column{
    display: flex;
    // flex-flow: column wrap;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1em;
    // flex
    width: 50%;
    padding: 1em .5em;
    border-radius: 10px;
    background-color: $explorer-dark;
    &.big{
      margin: 1em auto;
    }
  }
  .tech{
    width: 100px;
    transition: transform .3s ease;
    &:hover{
      transform: scale(1.08);
    }
    img{
      width: 100%;
    }
    .name{
      text-align: center;
    }
  }
}
</style>
