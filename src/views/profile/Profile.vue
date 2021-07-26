<template>
  <div class="profile">
    <div class="nav-bar">
      <nav-bar>
        <template v-slot:center>
          <div>我的档案</div>
        </template>
      </nav-bar>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import ProInof from './childComps/ProInof.vue'
export default {
  name: "profile",
  components: {
    NavBar,
    ProInof

  }
}
</script>

<style scope>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>