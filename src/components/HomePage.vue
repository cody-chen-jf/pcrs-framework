<template>
  <div class="home-page">
    <loading :isLoading="isLoading"></loading>
    <div class="home-page-title">This is Home Page</div>
    <el-row>
      <el-button type="success" round @click="loadingTest">跳转页面</el-button>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Loading from '@/base-components/loading/loading'
import { getUser, getUserWithOutHttp } from '@/api/user'

export default {
  name: 'HomePage',
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'setUser'
    ]),
    loadingTest() {
      this.isLoading = !this.isLoading
      setTimeout(() => {
//        getUser().then((res) => {
//          console.log(res)
//          this.setUser(res)
//          this.$router.push('/detailPage')
//        })
        getUserWithOutHttp().then((res) => {
          console.log(res)
          this.setUser(res)
          this.$router.push('/detailPage')
        })
        this.isLoading = !this.isLoading
      }, 2000)
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
