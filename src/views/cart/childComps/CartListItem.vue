<template>
  <div id="shop-item">
    <div class="item-selector">
      <!-- <input type="checkbox" /> -->
      <check-button
        :isCheck="product.checked"
        @click.native="checkClick"
      ></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ product.price }}</div>
        <div class="item-count right">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: {
    CheckButton
  },
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    checkClick () {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
#shop-item {
  background-color: #eee;
  border-radius: 8px;
  margin-bottom: 5px;
}
.item-img img {
  position: relative;
  left: 35px;
  width: 100px;
  border-radius: 8px;
}
.item-info {
  position: relative;
}
.item-title {
  position: absolute;
  font-size: 14px;
  width: 150px;
  left: 150px;
  top: -143px;
}
.item-desc {
  position: absolute;
  left: 150px;
  top: -50px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-bottom {
  position: relative;
}
.item-price {
  position: absolute;
  left: 250px;
  top: -25px;
  color: var(--color-high-text);
}
.item-count {
  position: absolute;
  left: 345px;
  top: -90px;
}
.item-selector {
  position: relative;
  top: 86px;
  left: 4px;
  width: 24px;
}
</style>