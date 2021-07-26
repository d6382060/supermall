<template>
  <div id="detail">
    <div class="nav-bar">
      <detail-nav-bar
        class="detail-nav"
        @titleClick="titleClick"
        :title-index="titleIndex"
      />
    </div>
    <scroll
      class="content"
      :pull-up-load="true"
      ref="scroll"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages" />
      <detail-info :Goods="Goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-param-info ref="params" :paramInfo="paramInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommends" :goods="recommend" />
    </scroll>
    <detail-bbar @addCart="addCart" />
    <back-top v-show="isDispalyNone" @click.native="backClick" />
    <toast :show="isShow" :message="message" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import detailSwiper from './childComps/detailSwiper.vue'
import DetailInfo from './childComps/DetailInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'

import Scroll from '../../components/common/scroll/Scroll.vue'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '../../network/derail'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBbar from './childComps/DetailBbar.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
import Toast from '../../components/common/toast/Toast.vue'



export default {
  components: {
    DetailNavBar,
    detailSwiper,
    DetailInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBbar,
    BackTop,
    Toast,
  },

  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: [],
      Goods: {},
      shop: {},
      detailInfo: {}, // 关于详细信息
      paramInfo: {}, // 关于参数
      commentInfo: {}, //评论信息
      recommend: [], // 推荐数据
      // themeTopsy: []  //Y轴数值
      titleSet: 0,
      titleIndex: 0,
      isDispalyNone: false,
      isShow: false,
      message: ''
    }
  },
  created () {
    //1.保存传入的iid
    this.iid = this.$route.params.id

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部图片轮播数据
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages

      // 2.获取商品详细信息
      this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo)

      //4.获取商品详细数据
      this.detailInfo = data.detailInfo

      // 5.商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 6.评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    //3.请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommend = res.data.list
    })
  },
  methods: {
    titleClick (index) {
      switch (index) {
        case 0:
          this.titleSet = 0
          this.$refs.scroll.scrool(0, this.titleSet, 500)
          break
        case 1:
          this.titleSet = -this.$refs.params.$el.offsetTop
          this.$refs.scroll.scrool(0, this.titleSet, 500)
          break
        case 2:
          this.titleSet = -this.$refs.comment.$el.offsetTop
          this.$refs.scroll.scrool(0, this.titleSet, 500)
          break
        case 3:
          this.titleSet = -this.$refs.recommends.$el.offsetTop
          this.$refs.scroll.scrool(0, this.titleSet, 500)
          break
      }
    },
    backClick () {
      // console.log("backClick")
      this.$refs.scroll.scrool(0, 0, 1000)
    },
    contentScroll (position) {
      this.titleSet = position.y
      //  console.log(position);
      this.isDispalyNone = -(position.y) > 1000
      if (-(this.titleSet) < this.$refs.params.$el.offsetTop) {
        this.titleIndex = 0
      } else if (-(this.titleSet) >= this.$refs.params.$el.offsetTop && -(this.titleSet) < this.$refs.comment.$el.offsetTop) {
        this.titleIndex = 1
      } else if (-(this.titleSet) >= this.$refs.comment.$el.offsetTop && -(this.titleSet) < this.$refs.recommends.$el.offsetTop) {
        this.titleIndex = 2
      } else if (-(this.titleSet) >= this.$refs.recommends.$el.offsetTop) {
        this.titleIndex = 3
      }
    },
    addCart () { // 加入购物车
      // 1.获取购物车需要展示的信息
      const prduct = {}
      prduct.image = this.topImages[0], //图片信息
        prduct.title = this.Goods.title,  // 商品信息
        prduct.desc = this.Goods.desc, // 商品描述信息
        prduct.price = this.Goods.realPrice,// 价格
        prduct.iid = this.iid // 商品ID

      // 2.将商品添加到购物车里面
      this.$store.dispatch('addCart', prduct).then(res => {
        // Toast 弹窗
        this.isShow = true
        this.message = res
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, 1500)
      })
    }
  }
}

</script>

<style scoped>
#detail {
  position: relative;
  background-color: #fff;
  z-index: 9;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
</style>