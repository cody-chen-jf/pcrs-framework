<template>
  <div class="detail-page">
    <div>name: {{ userDetail.name }}</div>
    <div>age: {{ userDetail.age }}</div>
    <div>sex: {{ userDetail.sex }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DetailPage',
  data() {
    return {
      userDetail: {}
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  created() {
    console.log('detail ... ', this.user)
    this.userDetail = this.user
  },
  methods: {}
}
</script>
