export default {
  totalCount(state){
    return state.cartFoods.reduce((preCount,food) =>  preCount + food.count  ,0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((prePrice,food) => prePrice + food.price * food.count ,0)
  }
}
