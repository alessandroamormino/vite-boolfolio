<script>
export default {
  name: 'AppGithub',
  data(){
    return{

    }
  }
}
</script>
<template>
  <h1>My Github</h1>
  <div class="box">
    <img src="/img/github.jpg" alt="github_photo">
    <div class="separator"></div>
    <div class="repo">
      <span>61 Repositories</span>
    </div>
    <div class="separator"></div>
    <div class="id">
      <span>alessandroamormino</span>
    </div>
    <div class="separator"></div>    
    <div class="location">
      <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path></svg>
      <span>Italy</span>
    </div>
  </div>
  <div class="contributions">
    <h5>Contributions in the past 5 months</h5>
    <img id="contributions" src="/img/contributions.png" alt="contributions">
    <span id="n_contrib">1,024 contributions in 2023 </span>
  </div>
  <div class="achievements">
    <h5>Achievements</h5>
    <div class="small-box">
      <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" alt="">
      <span>Quickdraw</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// import variable.scss
@use '../scss/variables.scss' as *;
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  // flex
  padding: 1.5em;
  border-radius: 50px;
  background-color: $explorer-dark;

  margin: 2em;
  img{
    width: 80px;
  }
  .separator::after{
    content: '';

    display: block;

    width: 2px;
    height: 60px;

    background-color: $light-blue;
  }
  .location{
    display: flex;
    align-items: center;
    gap: .2em;
    // flex

    svg{
      fill: #fff;
    }
  }
}
.contributions{
  display: flex;
  flex-flow: column;
  align-items: center;
  // flex
  margin: 5em 0;
  #contributions{
    width: 600px;
    margin: 1em 0;
    border-radius: 10px;
  }
  
  #n_contrib {
    display: block;
    font-size: .8em;
  }
}

.achievements{
  display: flex;
  flex-flow: column;
  align-items: center;
  // flex
  .small-box{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    // flex
    padding: 1.5em;
  
    width: 200px;
    height: 200px;

    margin-top: 1em;
  
    border-radius: 50px;
    background-color: $explorer-dark;

    transition: all .3s ease;
  
    img{
      width: 80px;
    }
    &:hover{
      transform: scale(1.05);
    }
  }
}
</style>
