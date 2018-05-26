<template>
  <div class="home-page">
    <div class="home-page-title">This is Home Page</div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      testData: ['a', 'b', 'c']
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import './../common/css/base.scss';

  .home-page-title {
    color: $base-color;
  }

  /*.test_img {*/
    /*background-image: url('./../assets/logo.png');*/
    /*width: 100px;*/
    /*height: 200px;*/
  /*}*/
</style>
