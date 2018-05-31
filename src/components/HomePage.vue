<template>
  <div class="home-page">
    <el-row>
      <el-col :span="4">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title" class="titleClass">New Submission</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title" class="titleClass">Create PCRS From Old PCRS</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title" class="titleClass">View My Concern PCRS</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span class="titleClass">Maintenance</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">Team List</el-menu-item>
              <el-menu-item index="1-2">User Profile</el-menu-item>
              <el-menu-item index="1-2">Status List</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <!--<loading :isLoading="isLoading"></loading>-->
        <div class="home-page-title">This is Home Page</div>
        <el-row>
          <el-button type="success" round @click="showHomePageInfo">显示HomePageInfo</el-button>
          <el-button type="success" round @click="loadingTest">跳转页面</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'
import { mapGetters, mapActions } from 'vuex'
import Loading from '@/base-components/loading/loading'
import { HOME_PAGE } from '@/store/namespaces'
import { SET_HOME_PAGE_INFO } from '@/store/modules/homePage/mutation-types'
import { getUser, getUserWithOutHttp } from '@/repositories/user'
import * as userService from '@/service/user'

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
      setTimeout(async () => {
//        let user = await userService.getUserResult()
        let user = getUserWithOutHttp()
        this.setUser(user)
        this.$router.push('/detailPage')

        //        getUserWithOutHttp().then((res) => {
        //          console.log(res)
        //          this.setUser(res)
        //          this.$router.push('/detailPage')
        //        })
        this.isLoading = !this.isLoading
      }, 2000)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    showHomePageInfo() {
      console.log('homePageInfo === ', this.homePageInfo)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import './../common/css/base.scss';

  .titleClass {
    display: inline-block;
    width: 103px;
    font-size: 10px;
    text-align: left;
  }

  .home-page-title {
    color: $base-color;
  }

  .testClass {
    width: 400px;
    background-color: red;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
  }

  /*.test_img {*/
  /*background-image: url('./../assets/logo.png');*/
  /*width: 100px;*/
  /*height: 200px;*/
  /*}*/
</style>
