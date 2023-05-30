<script>
export default{
  name: 'AppToolbar',
  data(){
    return {

    }
  }
}
</script>
<template>
  <div class="toolbar">
    <div class="left">
      <img src="/img/vscode_icon.svg" alt="">
      <div class="functions">
        <span>File</span>
        <span>Edit</span>
        <span>Selection</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
      </div>
    </div>
    <div class="center">
      <span>Amormino Alessandro - Portfolio</span>
    </div>
    <div class="right">
      <div class="close"></div>
      <div class="minimize"></div>
      <div class="expand"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
.toolbar{
  display: flex;
  align-items: center;
  justify-content: center;
  // flex
  height: 25px;
  background-color: $toolbar-dark;
  color: #fff;

  font-size: .8em;

  padding: 0 1em;
  .left{
    display: flex;
    flex: 1 1;
    text-align: left;
    gap: 1.5em;
    img{
      height: 20px;
    }
    .functions{
      display: flex;
      align-items: center;
      gap: 1.5em;

      cursor: pointer;
    }
  }
  .center{
    flex: 1 1;
    text-align: center;
  }

  .right{
    display: flex;
    justify-content: end;
    gap: .8em;
    flex: 1 1;

    div{
      height: 13px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;

      cursor: pointer;
      &.close{
        background-color: #FF5F57;
      }
      &.minimize{
        background-color: #FEBC2E;
      }
      &.expand{
        background-color: #2BC740;
      }
    }
  }
}


// *******************************************
//                  RESPONSIVE
// *******************************************
@media only screen and (max-width: 576px){
  .toolbar{
    font-size: .7em;
    .left{
      img{
        height: 15px;
      }
      .functions{
        display: none;
      }
    }
    .center{
      flex: none;
    }
    
    .right{
      div{
        height: 10px;
      }
    }
  }
}
</style>