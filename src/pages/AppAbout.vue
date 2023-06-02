<script>
export default {
  name: 'AppAbout',
  data(){
    return{
      backEnd: [
        {
          name: 'PHP',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          icon: 'devicon-php-plain',
        },
        {
          name: 'MySql',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
          icon: 'devicon-mysql-plain',
        },
        {
          name: 'Laravel',
          path: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
          icon: 'devicon-laravel-plain',
        },
        {
          name: 'Git',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          icon: 'devicon-git-plain',
        },
      ],
      frontEnd: [
        {
          name: 'HTML',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          icon: 'devicon-html5-plain',
        },
        {
          name: 'CSS',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          icon: 'devicon-css3-plain',
        },
        {
          name: 'JS',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          icon: 'devicon-javascript-plain',
        },
        {
          name: 'Bootstrap',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
          icon: 'devicon-bootstrap-plain',
        },
        {
          name: 'Sass',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
          icon: 'devicon-sass-original',
        },
        {
          name: 'Vue',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          icon: 'devicon-vuejs-plain',
        },
        // {
        //   name: 'Vite',
        //   path: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'
        // },
      ], 
      programs: [
        {
          name: 'GitHub',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          icon: 'devicon-github-original',
        },
        {
          name: 'VSCode',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
          icon: 'devicon-vscode-plain',
        },
        {
          name: 'MacOS',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
          icon: 'devicon-apple-original',
        },
        {
          name: 'Figma',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
          icon: 'devicon-figma-plain',
        },
        // {
        //   name: 'Postman',
        //   path: 'https://www.svgrepo.com/show/354202/postman-icon.svg'
        // },
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
    <div class="columns">
      <div class="column">
        <h5>Front-End</h5>
        <div class="column-inner">
          <div v-for="image in this.frontEnd" class="tech front">
            <i :class="image.icon"></i>
            <div class="name">{{image.name}}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <h5>Back-End</h5>
        <div class="column-inner">
          <div v-for="image in this.backEnd" class="tech back">
            <i :class="image.icon"></i>
            <div class="name">{{image.name}}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <h5>Programs</h5>
        <div class="column-inner">
          <div v-for="image in this.programs" class="tech programs">
            <i :class="image.icon"></i>
            <div class="name">{{image.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="socials">
    <h3>Socials</h3>
    <hr>
    <div class="box">
      <div class="box-inner">
        <a href="https://www.linkedin.com/in/alessandro-amormino-b059ab1b8/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/il.nalo/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/alessandroamormino" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://twitter.com/ale_amormino" target="_blank"><i class="fa-brands fa-twitter"></i></a>
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
    flex-flow: column nowrap;
    align-items: center;
    gap: 1em;
    // flex
    padding: 1.5em;
    border-radius: 50px;
    background-color: $explorer-dark;
    .column-inner{
      display: flex;
      flex-flow: row wrap;
      gap: 1em;
    }
  }
  .tech{
    i{
      font-size: 64px;
    }
    // width: 100px;
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

.socials{
  margin: 2em 0;
  .box-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 0 1.5em;
    // flex
    width: 200px;
    height: 200px;

    margin: 2em 0;
    padding: 1.5em;
    border-radius: 50px;
    background-color: $explorer-dark;
    i{
      font-size: 3em;
    }
  }
}

// *******************************************
//                  RESPONSIVE
// *******************************************
@media only screen and (max-width: 576px){
  p {
    font-size: .8em;
  }
  .technologies{
    font-size: .8em;
    .columns{
      flex-flow: column nowrap;
    }
  .column{
      .tech{  
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        i{
          font-size: 32px;
        }
      }
      .column-inner{
        justify-content: center;
      }
    }


  }
  .socials{
    .box{
      display: flex;
      justify-content: center;
      .box-inner{
        width: 150px;
        height: 150px;
        margin-bottom: 0;
        i{
          font-size: 32px;
        }
      }
    }
  }
}
</style>
