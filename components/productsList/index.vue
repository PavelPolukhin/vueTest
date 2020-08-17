<template>
  <div class="productsList">
    <div class="server" v-if="productsList.length">
      <div class="items">
        <div class="item-wrapper" v-for="item in productsList" :key="item.id" v-if="item.category === activeCategory">
          <div class="item">
            <div class="item-in_cart"  v-if="itemsCart.indexOf( item ) !== -1 ">
              <img src="@/static/images/success.svg" alt="" @click="deleteItemToCart(item)">
            </div>
            <div class="item-cart" v-else @click="addItemToCart(item)">
              <img src="@/static/images/cart.svg" alt="">
            </div>
            <div class="item-rate">
              <img src="@/static/images/star_4_5.svg" alt="">
              {{item.rating}}
            </div>
            <div class="item-photo">
              <img :src="`http://front-test.idalite.com${item.photo}`" alt="">
            </div>
            <div class="item-name">{{item.name}}</div>
            <div class="item-price">{{item.price}} Р</div>
          </div>
        </div>
      </div>
    </div>
    <div class="static" v-else>
      <div class="items">
        <div class="item-wrapper" v-for="item in staticProductsList" :key="item.id">
          <div class="item" v-if="item.category === staticActiveCategory">
            <div class="item-rate">
              <img src="@/static/images/star_4_5.svg" alt="">
              {{item.rating}}
            </div>
            <div class="item-in_cart"  v-if="itemsCart.indexOf( item ) !== -1 ">
              <img src="@/static/images/success.svg" alt="">
            </div>
            <div class="item-cart" v-else @click="addItemToCart(item)">
              <img src="@/static/images/cart.svg" alt="">
            </div>
            <div class="item-photo">
              <img src="@/static/images/static.jpg" alt="111">
            </div>
            <div class="item-name">{{item.name}}</div>
            <div class="item-price">{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    data() {
      return {}
    },
    computed: {
      activeCategory() {
        return this.$store.getters.ACTIVE_CATEGORY;
      },
      productsList() {
        return this.$store.getters.PRODUCTS_LIST;
      },
      staticActiveCategory() {
        return this.$store.getters.STATIC_ACTIVE_CATEGORY;
      },
      staticProductsList() {
        return this.$store.getters.STATIC_PRODUCTS_LIST;
      },
      itemsCart() {
        return this.$store.getters.ITEMS_CART;
      },
    },
    methods: {
      addItemToCart(item){
        this.$store.commit('ADD_ITEM_TO_CART', item);
      },
      deleteItemToCart(item){
        this.$store.commit('DELETE_ITEM_IN_CART', item);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .productsList{
    display: flex;
    .items{
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
    }
    .item{
      background: #FFFFFF;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      width: 264px;
      min-width: 264px;
      margin: 8px;
      position: relative;
      padding: 18px 16px 16px 16px;
      cursor: pointer;
      &-in_cart, &-cart{
        position: absolute;
        width: 12px;
        height: 12px;
        top: 18px;
        right: 18px;
        img{
          width: 100%;
        }
      }
      &-rate{
        position: absolute;
        top: 17px;
        left: 16px;
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: #F2C94C;
        display: flex;
        align-items: center;
      }
      &-photo{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 180px;
        min-height: 180px;
        margin-bottom: 16px;
        img{
          width: 100px;
        }
      }
      &-name{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #59606D;
        margin-bottom: 6px;
      }
      &-price{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #1F1F1F;
      }
    }
  }
</style>
