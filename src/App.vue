<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="el-row header-class">
      <div class="el-col-20 pcrs-title">PCRS</div>
      <div class="el-col-4 user-name">Name</div>
    </div>
    <div class="line"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

<style scoped>
  .header-class {
    color: #fff;
    height: 80px;
    background-color: #409EFF;
  }

  .pcrs-title {
    font-size: 36px;
    padding: 15px;
  }

  .user-name {
    font-size: 24px;
    padding: 20px;
  }
</style>
