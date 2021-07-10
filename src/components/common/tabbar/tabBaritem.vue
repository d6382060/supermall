<template>
  <div
    class="tab-bar-item"
    @click="itemClick"
  >
    <div v-if='!isActive'>
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-click"></slot>
    </div>
    <div :style="active">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBaritem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'skyblue'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    active () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      if (this.$route.path == this.path) {
        console.log(this.path);
      } else {
        this.$router.replace(this.path)
      }


    }

  }

}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.2);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 4px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>