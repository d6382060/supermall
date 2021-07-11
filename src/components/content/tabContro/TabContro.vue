<template>
  <div class="tab-contro">
    <div
      v-for="(item, index) in titles"
      class="tab-contro-item"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span> {{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabContro',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-contro {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-contro-item {
  flex: 1;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>