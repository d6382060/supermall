<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import ObserveDom from '@better-scroll/observe-dom'
import Pullup from '@better-scroll/pull-up'
BScroll.use(ObserveDom).use(Pullup)
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 1、创建BSscroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      // probeType: 3,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      // mouseWheel: true,
    })
    // 2、监听滚动的位置
    this.scroll.on('scroll', (position) => {
      //console.log(position);
      this.$emit('scroll', position)

    })
    // 3、监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrool (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    }
  }
  // mounted () {
  //   this.init()
  // },
  // beforeDestroy () {
  //   this.bs.destroy()
  // },
  // methods: {
  //   init () {
  //     this.bs = new BScroll(this.$refs.wrapper, {
  //       probeType: 3,
  //       click: true,
  //       observeDOM: true
  //     })
  //     // this.bs.on('scrollStart', () => {
  //     //   console.log('scrollStart-')
  //     // })
  //     // this.bs.on('scroll', ({ y }) => {
  //     //   console.log('scrolling-')
  //     // })
  //     // this.bs.on('scrollEnd', (pos) => {
  //     //   console.log(pos)
  //     // })
  //   },
  // }
}
</script>

<style scoped>
</style>