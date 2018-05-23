/*
vuex的mutations模块
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo ={}
  },
  [RECEIVE_SHOP_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_SHOP_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_SHOP_INFO](state,{info}){
    state.info = info
  },
  //
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){//第一次增加，要在food中添加count属性
      Vue.set(food,'count',1)
      //第一次点击CartControl后，购物车中需要填入food。
      state.cartFoods.push(food)
    }else{
      //对food进行操作，cartFoods中的food也会随之改变，二者指向同一引用
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}) {
    if(food.count){
      food.count--
      if(food.count === 0){
        //将购物车中的食物移出（底部购物车）
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state) {
  //  先清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
  //  将购物车中count=0的food清除
    state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}) {
    state.searchShops = searchShops
  }
}
