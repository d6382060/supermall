<template>
  <div class="info">
    <div class="top">
      <img src="../../../assets/img/tabbar-icon/wode.png" alt="" />
      <div class="denlu">登录/注册</div>
      <div class="butto">暂无绑定手机号</div>
      <span class="rigth">></span>
    </div>
    <div class="cent">
      <div class="neo">
        <span>0.00元</span>
        <span>我的余额</span>
      </div>
      <div class="tow">
        <span>0个</span>
        <span>我的优惠</span>
      </div>
      <div class="the">
        <span>0分</span>
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProInof'
}
</script>

<style>
.top {
  background-color: var(--color-tint);
  color: #fff;
}
.top img {
  border-radius: 25px;
  background-color: #eee;
  height: 50px;
  width: 50px;
  position: relative;
  top: 12px;
}
.denlu {
  position: relative;
  top: -35px;
  left: 70px;
}
.butto {
  position: relative;
  top: -25px;
  left: 75px;
}
.rigth {
  position: relative;
  top: -55px;
  left: 335px;
}
.cent {
  display: flex;
  margin: 50px;
  justify-content: center;
  border-bottom: 5px solid #eee;
}
.neo {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px 0 10px;
  width: 70px;
}
.tow {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px 0 10px;
  width: 86px;
}
.the {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px 0 10px;
  width: 86px;
}
</style>