/*
vuex的actions模块
 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO
} from './mutation-types'

export default {
  // 异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  // 异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
  //记录用户信息
  recordUserInfo({commit} , userInfo) {
    commit(RECEIVE_USER_INFO,{userInfo})
  },
//  异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if(result.code === 0){
      commit(RECEIVE_USER_INFO , {userInfo:result.data})
    }
  },
//  退出登录
  async logout({commit}) {
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER_INFO)
    }
  },

  //获取商品信息
  async getShopGood ({commit},callback) {
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_SHOP_GOODS,{goods})
      callback && callback()
    }
  },
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_SHOP_RATINGS,{ratings})}
    },
    async getShopInfo ({commit}) {
      const result = await reqShopInfo()
      if(result.code === 0){
        const info = result.data
        commit(RECEIVE_SHOP_INFO,{info})
      }
  }

}
