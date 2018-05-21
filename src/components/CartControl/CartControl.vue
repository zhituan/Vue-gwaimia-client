<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
    export default {
      //cart是在每个food的li中，需要count值，每次传给CartControl组件需要告知是哪个food增加了count
      //因此直接将food对象传给cart组件，在food中增加count属性。注意food对象中一开始是没有count的
      props:{
        food:Object
      },
      //初始化显示时，－和count的值是不显示的，在点击+后二者再显示。
      //当点击+后，food中要添加count属性。
      //true时表示加，false时表示减  isAdd:是否添加
      methods:{
        updateFoodCount(isAdd) {
          this.$store.dispatch('updateFoodCount',{isAdd , food:this.food})
        }
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active,&.move-leave-active
        transition all 0.3s
      &.move-enter , &.move-leave-to
        opacity(0)
        transform translateX(15px) rotate(360deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>

