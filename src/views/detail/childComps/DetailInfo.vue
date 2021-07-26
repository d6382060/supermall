<template>
  <div v-if="Object.keys(Goods).length !== 0" class="detail-info">
    <div class="info-title">{{ Goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ Goods.newPrice }}</span>
      <span class="o-price">{{ Goods.oldPrice }}</span>
      <span v-if="Goods.discount" class="discount">{{ Goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ Goods.columns[0] }}</span>
      <span>{{ Goods.columns[1] }}</span>
      <span>{{ Goods.services[Goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in Goods.services.length - 1"
        :key="index"
      >
        <img :src="Goods.services[index - 1].icon" alt="" />
        <span>{{ Goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  nmame: 'DetailInfo',
  props: {
    Goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-info {
  background: white;
  /* border-bottom: 4px solid #eee; */
}
.info-title {
  padding: 10px 5px;
  font-size: 18px;
}
.info-price {
  position: relative;
}
.n-price {
  color: var(--color-high-text);
  padding: 10px 5px;
  font-size: 20px;
  font-weight: bold;
}
.o-price {
  font-size: 13px;
  text-decoration: line-through;
}
.discount {
  color: #fff;
  background-color: var(--color-high-text);
  font-size: 13px;
  text-align: start;
  display: inline-block;
  border-radius: 10px;
  padding: 3px;
  position: absolute;
  top: -2px;
  left: 140px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
  padding: 10px 0 5px 0;
  color: rgb(176, 175, 176);
  font-size: 15px;
  border-bottom: #eeeeee 1px solid;
}
.info-service {
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
  padding: 20px 0;
  font-size: 15px;
}
.info-service-item img {
  width: 14px;
  vertical-align: middle;
  margin-top: -5px;
}
</style>