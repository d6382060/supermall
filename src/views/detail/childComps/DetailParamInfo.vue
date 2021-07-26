<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      v-for="(table, index) in paramInfo.sizes"
      class="info-size"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.param-info {
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
}
.info-size tr {
  display: inline-block;
  padding-left: 10px;
  font-size: 14px;
}
.info-size td {
  height: 40px;
  width: 150px;
}
.info-size td:nth-child(n + 2) {
  color: var(--color-high-text);
  width: 100vh;
  text-align: center;
}
.param-info table:nth-child(1) tr {
  border-bottom: 1px solid #eee;
  margin-top: -1px;
}

.param-info table:nth-child(2) tr {
  /* border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-top: 1px solid #eee; */
  border-bottom: 1px solid #eee;
  margin-top: -1px;
}
.info-param {
  margin-top: -1px;
}
.info-param tr {
  border-bottom: 1px solid #eee;
  display: inline-block;
}
.info-param tr td {
  height: 40px;
  width: 150px;
  text-align: center;
}
.info-param tr td:nth-child(n + 2) {
  color: var(--color-high-text);
  width: 100vh;
  text-align: center;
}
.info-img img {
  width: 100%;
}
</style>