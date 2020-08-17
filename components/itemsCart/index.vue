<template>
  <div class="wrapper-cart" :class="itemsCartState ? 'cart-open':''">
    <div class="cart" v-if="itemsCart.length">
      <div class="header">
        <div class="header-title">Корзина</div>
        <div class="header-action" @click="toggleItemsCart"><i class="el-icon el-icon-close"></i></div>
      </div>
      <div class="items">
        <div class="item" v-for="item in itemsCart" :key="item.id">
          <div class="item__left">
            <div class="item__left-img">
              <img v-if="item.photo" :src="`http://front-test.idalite.com${item.photo}`" alt="">
              <img src="@/static/images/static.jpg" alt="" v-else>
            </div>
          </div>
          <div class="item__center">
            <div class="item__center-name">{{item.name}}</div>
            <div class="item__center-price">{{item.price}}</div>
            <div class="item__center-rating">
              <img src="@/static/images/star_4_5.svg" alt="">
              {{item.rating}}
            </div>
          </div>
          <div class="item__right">
            <div class="item__right-del">
              <i class="el-icon el-icon-delete" @click="deleteItem(item)"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <div class="form-title">
          Оформить заказ
        </div>
        <el-form :model="validateForm" ref="validateForm">
          <el-form-item
            prop="name"
            :rules="[
              { required: true, message: 'name is required'}
          ]">
            <el-input v-model="validateForm.name" placeholder="Ваше имя"></el-input>
          </el-form-item>
          <el-form-item
            prop="phone"
            :rules="[
              { required: true, message: 'number is required'},
          ]">
            <masked-input v-model="validateForm.phone" mask="\+\7 111 1111-11" placeholder="Ваш Телефон"/>
          </el-form-item>
          <el-form-item
            prop="address"
            :rules="[
              { required: true, message: 'address is required'}
          ]">
            <el-input v-model="validateForm.address" placeholder="Ваш Адрес"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="button" @click="submitForm('validateForm')">Submit</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="cart-empty" v-else>
      <div class="header">
        <div class="header-title">Корзина</div>
        <div class="header-action" @click="toggleItemsCart"><i class="el-icon el-icon-close"></i></div>
      </div>
      <div class="text">
        <p>Пока что вы ничего не добавили
          в корзину.</p>
      </div>
      <div class="action">
        <div class="button" @click="toggleItemsCart">Перейти к выбору</div>
      </div>
    </div>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'

  export default {
    components: {
      MaskedInput
    },
    data() {
      return {
        validateForm: {
          name: '',
          phone: '',
          address: ''
        }
      }
    },
    computed: {
      itemsCart() {
        return this.$store.getters.ITEMS_CART;
      },
      itemsCartState() {
        return this.$store.getters.ITEMS_CART_STATE;
      },
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.validateForm, this.itemsCart);
            this.$store.commit('CLEAR_ITEMS_CART');
          } else {
            return false;
          }
        });
      },
      deleteItem(item){
        this.$store.commit('DELETE_ITEM_IN_CART', item);
      },
      toggleItemsCart(){
        this.$store.commit('TOGGLE_ITEMS_CART');
      }
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper-cart{
    position: absolute;
    top: 0;
    bottom: 0;
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0 0 8px;
    max-width: 460px;
    width: 100%;
    right: -461px;
    transition: 0.3s ease all;
    z-index: 10;
    overflow: auto;
  }
  @keyframes toggleItemsCart {
    from{
      right: -461px;
    }
    to{
      right: 0;
    }
  }
  .cart-open{
    animation: toggleItemsCart 0.3s ease forwards;
  }
  .cart, .cart-empty{
    padding: 52px 48px;
    .text{
      margin-bottom: 24px;
      p{
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 28px;
        color: #000000;
      }
    }
    .items{
      display: flex;
      flex-wrap: wrap;
    }
    .item{
      background: #FFFFFF;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 12px 22px;
      &__left{
        max-width: 100px;
        min-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 100%;
        }
      }
      &__center{
        flex-grow: 2;
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        &-name{
          width: 100%;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: #59606D;
          margin-bottom: 6px;
        }
        &-price{
          width: 100%;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
          color: #1F1F1F;
        }
        &-rating{
          margin-top: auto;
          font-style: normal;
          font-weight: bold;
          font-size: 10px;
          line-height: 13px;
          color: #F2C94C;
          display: flex;
          align-items: center;
        }
      }
      &__right{
        i{
          color: #959DAD;
          font-size: 22px;
          cursor: pointer;
        }
      }
    }
    .form{
      margin-top: 20px;
      &-title{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: #59606D;
        margin-bottom: 16px;
      }
    }
  }
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    &-title{
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 41px;
      color: #000000;
    }
    &-action{
      i{
        font-size: 14px;
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
</style>
