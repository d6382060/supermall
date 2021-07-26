<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-contro
      :titles="['流行', '新款', '精选']"
      @tabcli="tabcli"
      ref="tabContorl1"
      class="tab-control"
      v-show="isTbaFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @imagLoad="imagLoad" />
      <home-recom :recommends="recommends" />
      <feature />
      <tab-contro
        :titles="['流行', '新款', '精选']"
        @tabcli="tabcli"
        ref="tabContorl2"
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
    BackTop,
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
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTbaFixed: false
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
      this.$refs.tabContorl1.currentIndex = index
      this.$refs.tabContorl2.currentIndex = index
    },
    backClick () {
      this.$refs.scroll.scrool(0, 0, 500)
    },
    contentScroll (position) {
      // console.log(position);
      // 1.判断返回顶部按钮是否显示
      this.isShowBackTop = -position.y > 1000
      // 2.决定tabControl是否吸顶(position：fixed)
      this.isTbaFixed = -position.y > this.tabOffsetTop
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh() // 重新计算可滚动高度
    },
    imagLoad () {
      // 1. 赋值
      // 所有的组件都有一个属性$el：用于获取组件中的元素
      // this.tabOffsetTop = this.$refs.tabContorl
      this.tabOffsetTop = this.$refs.tabContorl2.$el.offsetTop
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

        // 完成下拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  },
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
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
.tab-control {
  position: relative;
  z-index: 9;
}
</style>