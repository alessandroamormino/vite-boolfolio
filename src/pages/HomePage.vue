<script>
// importo lo store
import {store} from '../store.js';

export default {
  name: 'HomePage',
  data(){
    return {
      store,
    }
  }
}
</script>
<template>
<div class="homepage">
  <!-- <div class="svg-image-box">
    <svg id="small1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" :stop-color="this.store.darkMode ? 'rgba(128, 203, 196, 1)' : '#AC9D58'" offset="0%"></stop>                            <stop id="stop2" :stop-color="this.store.darkMode ? 'rgba(42, 45, 62, 1)' : '#EEE8D5'" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M22,5C22,15.8,11,31.6,-1.1,31.6C-13.1,31.6,-26.2,15.8,-26.2,5C-26.2,-5.7,-13.1,-11.4,-1.1,-11.4C11,-11.4,22,-5.7,22,5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
    <svg id="small2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" :stop-color="this.store.darkMode ? 'rgba(128, 203, 196, 1)' : '#AC9D58'" offset="0%"></stop>                            <stop id="stop2" :stop-color="this.store.darkMode ? 'rgba(42, 45, 62, 1)' : '#EEE8D5'" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M22,5C22,15.8,11,31.6,-1.1,31.6C-13.1,31.6,-26.2,15.8,-26.2,5C-26.2,-5.7,-13.1,-11.4,-1.1,-11.4C11,-11.4,22,-5.7,22,5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
    <svg id="small3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" :stop-color="this.store.darkMode ? 'rgba(128, 203, 196, 1)' : '#AC9D58'" offset="0%"></stop>                            <stop id="stop2" :stop-color="this.store.darkMode ? 'rgba(42, 45, 62, 1)' : '#EEE8D5'" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M22,5C22,15.8,11,31.6,-1.1,31.6C-13.1,31.6,-26.2,15.8,-26.2,5C-26.2,-5.7,-13.1,-11.4,-1.1,-11.4C11,-11.4,22,-5.7,22,5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
  </div> -->
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
      <!-- <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" :stop-color="this.store.darkMode ? 'rgba(128, 203, 196, 1)' : '#AC9D58'" offset="0%"></stop>                            <stop id="stop2" :stop-color="this.store.darkMode ? 'rgba(42, 45, 62, 1)' : '#EEE8D5'" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M32.4,-17.5C38,-9,35.8,5.2,29.1,15.2C22.4,25.3,11.2,31.2,-1.1,31.8C-13.5,32.5,-27,27.9,-29.4,20.4C-31.8,12.8,-23.2,2.2,-16.4,-6.9C-9.7,-16,-4.9,-23.6,4.3,-26C13.4,-28.5,26.8,-25.9,32.4,-17.5Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0" stroke="url(#sw-gradient)"></path></svg> -->
      <svg v-if="this.store.darkMode" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;"><path id="blob" fill="url(#gradient)" style="opacity: 1;">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style="stop-color: rgb(128, 203, 196)"></stop>                            <stop offset="100%" style="stop-color: rgba(42, 45, 62, 1);"></stop>                        </linearGradient>                        </defs>                                            </svg>

      <svg v-else version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;"><path id="blob" fill="url(#gradient)" style="opacity: 1;">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style="stop-color: rgb(172, 157, 88)"></stop>                            <stop offset="100%" style="stop-color: rgb(237, 232, 214);"></stop>                        </linearGradient>                        </defs>                                            </svg>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
// *{
//   color: #80cbc4;
//   color: rgba(42, 45, 62, 1)
// }
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
    // gap: 150px;
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
      padding-right:200px;
      svg{
        width: 600px;
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
      // align-items: space-around;
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