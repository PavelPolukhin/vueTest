<template>
  <div class="header-wrapper">
    <header class="header">
      <h2 class="title">TestList</h2>
      <div class="items_cart" @click="toggleItemsCart">
        <div class="img">
          <img src="@/static/images/cart.png" alt="">
        </div>
        <div class="counter" v-if="itemsCart.length">
          <span>{{itemsCart.length}}</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>


  export default {
    data() {
      return {}
    },
    computed: {
      itemsCart() {
        return this.$store.getters.ITEMS_CART;
      },
    },
    methods: {
      toggleItemsCart(){
        this.$store.commit('TOGGLE_ITEMS_CART');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-wrapper{
    background: #FFFFFF;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 9;
  }
  .header{
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
    width: 100%;
    padding: 18px 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .items_cart{
    position: relative;
    cursor: pointer;
    .counter{
      position: absolute;
      right: -6px;
      top: -6px;
      background: #959DAD;
      border-radius: 50%;
      font-size: 8px;
      line-height: 10px;
      color: #FFFFFF;
      width: 12px;
      height: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
