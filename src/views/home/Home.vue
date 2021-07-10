<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recom :recommends="recommends" />
  </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecom from './childComps/HomeRecom.vue'

import { getHomeMultidata } from '../../network/home'


export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecom
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {  // 生命周期函数 ，在当前组件加载的时候
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(res);
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>