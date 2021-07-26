import { createStore } from 'vuex'
import getters from './getter'

export default createStore({
  getters,
  state: {
    cartList: []
  },
  mutations: {
    addCounter (state, payload) {
      payload.count++
    },
    addToCart (state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart (context, payload) {
      return new Promise((resolve, reject) => {
        // payload新添加的商品 判断是否已经存在
        let oldProduct = null
        for (let item of context.state.cartList) {
          if (item.iid === payload.iid) {
            oldProduct = item
          }
        }
        // 2.判断 oldProduct 
        if (oldProduct) {  // 数量 +1
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量+1')
        } else { // 添加新的商品
          payload.count = 1
          // context.state.acrtList.push(payload)
          context.commit('addToCart', payload)
          resolve('添加了新的商品')
        }
      })
    }
  },
  modules: {

  }
})
