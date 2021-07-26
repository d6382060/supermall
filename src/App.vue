<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tabbar />
  </div>
</template>

<script>

import MainTabbar from './components/content/mainTabbar/MainTab.vue'
export default {
  name: "app",
  components: {
    MainTabbar,


  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
