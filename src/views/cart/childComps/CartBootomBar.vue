<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :isCheck="isSelectAll"
        class="check-Button"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">合计:{{ totalPrice }}</div>
    <div class="caculate">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  name: 'CartBootomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      // return this.$store.state.cartList.filter(item => {
      //   return item.checked
      // }).length
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.count
      }, 0)
    },
    isSelectAll () {
      // 判断当购物车为空时，全选按钮默认为false
      if (this.$store.state.cartList.length === 0) return false
      // return !(this.$store.state.cartList.filter(item => item.checked).length)
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick () {
      if (this.isSelectAll) { // 全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else { // 全部不选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  display: flex;
}
.check-content {
  display: flex;
  font-size: 14px;
  width: 70px;
}
.check-Button {
  height: 20px;
  width: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 5px;
}
.check-content span {
  line-height: 40px;
}
.price {
  font-size: 14px;
  margin-top: 12px;
  margin-left: 30px;
  flex: 1;
}
.caculate {
  width: 90px;
  line-height: 40px;
  font-size: 14px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>