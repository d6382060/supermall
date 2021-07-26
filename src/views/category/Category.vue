<template>
  <div class="category">
    <div class="nav-bar">
      <nav-bar>
        <template v-slot:center>
          <div>商品分类</div>
        </template>
      </nav-bar>
    </div>
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <div class="cate-nav">
        <category-nav :catetitle="catetitle" @activeIndex="activeIndex" />
      </div>
      <div class="right-nav">
        <!-- <goods-list :goods="Subcategory" /> -->
        <cate-list :cateItem="Subcategory" />
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import CategoryNav from './childComps/CategoryNav.vue'

import { getCategory, getSubcategory } from '../../network/Category'
import Scroll from '../../components/common/scroll/Scroll.vue';
import CateList from './childComps/CateList.vue';
export default {
  components: {
    NavBar,
    CategoryNav,
    Scroll,
    CateList
  },
  data () {
    return {
      catetitle: [], // 左边导航栏标题
      maitKey: null, // 获取maitKey 值
      currentIndex: '3627', //index
      Subcategory: [], //右边数据

    }
  },
  name: 'category',
  created () {

    getCategory().then(res => {
      // console.log(res);
      this.catetitle = res.data.category.list
    }),
      getSubcategory(this.currentIndex).then(res => {
        this.Subcategory = res.data.list
        // console.log(this.Subcategory);
      })

  },
  activated () {
    // console.log(this.$refs.scroll.refresh);
    this.$refs.scroll.refresh()
  },
  methods: {
    activeIndex (index) {
      this.currentIndex = index.maitKey
      getSubcategory(this.currentIndex).then(res => {
        this.Subcategory = res.data.list
        // console.log(this.Subcategory);
      })



    },
    getSubcategory (type) {
      console.log(type);
    }
  }

}
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
.category {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.right-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>