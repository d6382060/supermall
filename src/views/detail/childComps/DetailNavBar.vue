<template>
  <!-- // 导航栏 -->
  <div class="detail-nav-bar">
    <nav-bar>
      <!-- 中间文字 -->
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            class="title-item"
            :class="{ active: index == currentIndex }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
      <!-- 左边箭头 -->
      <template v-slot:left>
        <div class="left-icon" @click="backClick">
          <div></div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  components: { NavBar },
  props: {
    titleIndex: {
      type: Number
    }
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick () {
      this.$router.back()
    }
  },
  watch: {
    titleIndex () {
      this.currentIndex = this.titleIndex
    }
  }

}
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.left-icon {
  height: 20px;
  border: 10px solid;
  border-color: transparent pink transparent transparent;
  position: absolute;
  left: 20px;
  top: 12px;
}
</style>