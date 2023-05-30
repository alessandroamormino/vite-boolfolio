<script>
export default {
  name: 'HomePage',
  data(){
    return {}
  }
}
</script>
<template>
<div class="homepage">
  <div class="svg-image-box">
    <svg id="small1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(128, 203, 196, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(42, 45, 62, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M22,5C22,15.8,11,31.6,-1.1,31.6C-13.1,31.6,-26.2,15.8,-26.2,5C-26.2,-5.7,-13.1,-11.4,-1.1,-11.4C11,-11.4,22,-5.7,22,5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
    <svg id="small2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(128, 203, 196, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(42, 45, 62, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M22,5C22,15.8,11,31.6,-1.1,31.6C-13.1,31.6,-26.2,15.8,-26.2,5C-26.2,-5.7,-13.1,-11.4,-1.1,-11.4C11,-11.4,22,-5.7,22,5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
    <svg id="small3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(128, 203, 196, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(42, 45, 62, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M22,5C22,15.8,11,31.6,-1.1,31.6C-13.1,31.6,-26.2,15.8,-26.2,5C-26.2,-5.7,-13.1,-11.4,-1.1,-11.4C11,-11.4,22,-5.7,22,5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
  </div>
  <div class="container-centered">
    <div class="info">
      <h1 class="first">Hi,</h1> <h1 class="second">I'm Alessandro Amormino</h1>
      <h3 class="third">Full Stack Web <span>Developer</span></h3>
      <div class="buttons">
        <router-link :to="{name: 'projects'}"><button class="_btn _btn-primary">View works</button></router-link>
        <router-link :to="{name: 'contact'}"><button class="_btn _btn-secondary">Contact me</button></router-link>
      </div>
    </div>
    <div class="svg-image">
      <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stop-color="rgba(128, 203, 196, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(42, 45, 62, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M32.4,-17.5C38,-9,35.8,5.2,29.1,15.2C22.4,25.3,11.2,31.2,-1.1,31.8C-13.5,32.5,-27,27.9,-29.4,20.4C-31.8,12.8,-23.2,2.2,-16.4,-6.9C-9.7,-16,-4.9,-23.6,4.3,-26C13.4,-28.5,26.8,-25.9,32.4,-17.5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0" stroke="url(#sw-gradient)"></path></svg>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
.homepage{
  h1.first{
    position: relative;
    opacity: 0;
    animation: first .7s ease forwards;
  }
  h1.second{
    position: relative;
    opacity: 0;
    animation: second .7s ease forwards .4s;
  }
  h3.third{
    position: relative;
    opacity: 0;
    animation: third .7s ease forwards .6s;
  }
  .svg-image-box{
    position: absolute;
    top: 200px;
    right: 300px;
    svg#small1{
      position: absolute;
      top: 100px;
      right: 50px;
      width: 100px;
    }
    svg#small2{
      position: absolute;
      top: 180px;
      right: 90px;
      width: 100px;
    }
    svg#small3{
      position: absolute;
      top: 90px;
      right: 150px;
      width: 100px;
    }
  }
  .container-centered{
    width: calc(100% - 60px - 2em - 200px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
    // flex
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // position
    h1{
      font-size: 4em;
    }
    h3{
      position: relative;
      font-size: 2em;
      width: fit-content;
      span::after{
        content: '';
        position: absolute;
        bottom: 0;
        // right: -.5em;
        margin-left: .5em;

        // animation
        animation: blinker .8s ease infinite alternate-reverse 1s;

        width: .2rem;
        height: 1em;
        background-color: $light-blue;
      }
    }
    .info{
      display: flex;
      flex-flow: column nowrap;
      // flex
      .buttons{
        padding: 2em 0;
        font-size: 1.2em;
        ._btn{
          padding: .4em 1em;
          border: 1px solid $light-blue;
        }
        ._btn-primary{
          position: relative;
          opacity: 0;
          animation: btn1 .7s ease forwards 1s, blinker-btn .8s infinite alternate-reverse;
          // animation
          background-color: $light-blue;
          margin-right: 1em;
          transition: transform .4s ease;
          &:hover{
            transform: scale(.95);
          }
        }
        ._btn-secondary{
          position: relative;
          opacity: 0;
          animation: btn2 .7s ease forwards 1s;
          // animation
          background-color: $main-dark;
          color: #fff;
          transition: background-color .4s ease;
          &:hover{
            background-color: $light-blue;
            color: #000;
          }
        }
      }
    }
    .svg-image{
      svg{
        width: 500px;
      }
    }
  }
}



// *******************************************
//                  RESPONSIVE
// *******************************************
@media only screen and (max-width: 576px){
  .homepage{
    font-size: .7em;
    height: 100%;
    .svg-image-box{
      #small1{
        top: -200px;
        left: 0;
      }
      #small2{
        top: -150px;
        left: 80px;
      }
      #small3{
        display: none;
      }
    }
    .container-centered{
      flex-flow: column nowrap;
      gap: .2em;
      width: calc(100% - 50px - 3em);
      .svg-image{
        svg{
          display: none;
        }
      }
    }
  }
}
</style>