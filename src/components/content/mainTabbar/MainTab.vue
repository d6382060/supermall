<template>
  <tab-bar>
    <tab-baritem path="/home" activeColor="red">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar-icon/a-15-shouye.png" alt="" />
      </template>

      <template v-slot:item-text>
        <div>首页</div>
      </template>
      <template v-slot:item-icon-click>
        <img src="@/assets/img/tabbar-icon/shouye.png" alt="" />
      </template>
    </tab-baritem>
    <tab-baritem path="/category">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar-icon/aichegujiabeifen7.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
      <template v-slot:item-icon-click>
        <img src="@/assets/img/tabbar-icon/gengduo.png" alt="" />
      </template>
    </tab-baritem>
    <tab-baritem path="/cart">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar-icon/maichepin.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
      <template v-slot:item-icon-click>
        <img src="@/assets/img/tabbar-icon/shouji.png" alt="" />
      </template>
    </tab-baritem>
    <tab-baritem path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar-icon/a-14-wode.png" alt="" />
      </template>
      <template v-slot:item-icon-click>
        <img src="@/assets/img/tabbar-icon/wode.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-baritem>
  </tab-bar>
</template>

<script>
import tabBar from '../../common/tabbar/tabBar.vue'
import tabBaritem from '../../common/tabbar/tabBaritem.vue'
export default {
  name: 'MainTab',
  components: {
    tabBar,
    tabBaritem
  }
}
</script>

<style scope>
</style>