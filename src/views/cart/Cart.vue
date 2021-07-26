<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div class="center">购物车({{ cartLength }})</div>
      </template>
    </nav-bar>

    <!-- 商品列表 -->
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <cart-list />
    </scroll>

    <!-- 底部汇总 -->
    <cart-bootom-bar />
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex'
import CartList from './childComps/CartList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import CartBootomBar from './childComps/CartBootomBar.vue'
export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBootomBar,
  },
  computed: {
    ...mapGetters([
      'cartLength'
    ])
  },
  activated () {
    // console.log(this.$refs.scroll.refresh);
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
.cart {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>