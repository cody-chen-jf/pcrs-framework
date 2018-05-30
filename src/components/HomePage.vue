<template>
  <div class="home-page">
    <loading :isLoading="isLoading"></loading>
    <div class="home-page-title">This is Home Page</div>
    <el-row>
      <el-button type="success" round @click="showHomePageInfo">显示HomePageInfo</el-button>
      <el-button type="success" round @click="loadingTest">跳转页面</el-button>
    </el-row>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'
import { mapGetters, mapActions } from 'vuex'
import Loading from '@/base-components/loading/loading'
import { HOME_PAGE } from '@/store/namespaces'
import { SET_HOME_PAGE_INFO } from '@/store/modules/homePage/mutation-types'
import { getUser, getUserWithOutHttp } from '@/api/user'

// const {mapActions, mapGetters} = createNamespacedHelpers(HOME_PAGE)

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
  computed: {
    ...mapGetters({
      homePageInfo: `${HOME_PAGE}/homePageInfo`
    })
  },
  created() {
    this.setHomePageInfo({name: 'homePage', version: 1.0})
  },
  methods: {
    ...mapActions({
      setHomePageInfo: `${HOME_PAGE}/setHomePageInfo`,
      setUser: 'setUser'
    }),
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
    },
    showHomePageInfo() {
      console.log('homePageInfo === ', this.homePageInfo)
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
