<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recom :recommends="recommends" />
    <feature />
    <tab-contro class="tabContro" :titles="['流行', '新款', '精选']" />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>


import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecom from './childComps/HomeRecom.vue'
import feature from './childComps/feature.vue'

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabContro from '@/components/content/tabContro/TabContro.vue'
// import TabContro from '../../components/content/tabContro/TabContro.vue'

import { getHomeMultidata, getHomeGoods } from '../../network/home'





export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecom,
    feature,
    TabContro,
    TabContro
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 1, list: [] }, // 流行的数据
        'news': { page: 1, list: [] }, // 新款的数据
        'sell': { page: 1, list: [] }  // 精选数据
      }
    }
  },
  created () {  // 生命周期函数 ，在当前组件加载的时候
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(res);
    })
    // 2.请求商品数据
    getHomeGoods('pop', 1).then(res => {
      console.log(res);
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
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
}
</style>