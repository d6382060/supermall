<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in catetitle" @click="activeIndex(item)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryNav',
  props: {
    catetitle: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    activeIndex (index) {
      this.$emit("activeIndex", index)
    }
  }

}
</script>

<style scoped>
.list {
  position: fixed;
  background-color: #eee;
  text-align: center;
  z-index: 999;
}
.list ul li {
  padding: 20px 20px;
}
</style>