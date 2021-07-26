<template>
  <div v-for="item in cateItem" class="goods-item">
    <a :href="item.link"> <img :src="item.image" alt="" @load="imageLoad" /></a>
    <div class="goods-info">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import bus from '../../../eventBus';
export default {
  name: 'GoodsListItem',

  props: {
    cateItem: {
      type: Array,
      default () {
        return []
      }
    }
  },
  imageLoad () {
    bus.$emit('imageLoad');
    // console.log(bus.$emit);
    //this.$bus.eventBus.$emit('imageLoad')
    // console.log(eventBus.$emit)
  },
  // created () {
  //   getSubcategory(3627).then(res => {
  //     console.log(res);
  //   })
  // }


}
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 100px;
  height: 150px;
  left: 130px;
}
.goods-item a img {
  width: 100px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info {
  color: var(--color-high-text);
  margin-right: 10px;
}
</style>