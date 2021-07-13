<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <home-recom :recommends="recommends" />
      <feature />
      <tab-contro
        class="tabContro"
        :titles="['流行', '新款', '精选']"
        @tabcli="tabcli"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>


import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecom from './childComps/HomeRecom.vue'
import feature from './childComps/feature.vue'

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabContro from '@/components/content/tabContro/TabContro.vue'
// import TabContro from '../../components/content/tabContro/TabContro.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'


import { getHomeMultidata, getHomeGoods } from '../../network/home'







export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecom,
    feature,
    TabContro,
    GoodsList,
    TabContro,
    Scroll,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] }, // 流行的数据
        'new': { page: 0, list: [] }, // 新款的数据
        'sell': { page: 0, list: [] }  // 精选数据
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  created () {  // 生命周期函数 ，在当前组件加载的时候
    // 1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
    事件监听的相关方法
     */
    tabcli (index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break

      }
    },
    backClick () {
      this.$refs.scroll.scrool(0, 0, 500)
    },
    contentScroll (position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh() // 重新计算可滚动高度
    },
    /**
     网络请求相关的方法    
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res);
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
}
.tabContro {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  /* height: calc(100vh - 98px); */
  /* height: calc(100vh - 49px);
  /* margin-top: 44px; */

  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>