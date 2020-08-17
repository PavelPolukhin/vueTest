<template>
  <div class="main">
    <headerApp/>
    <div class="body-wrapper">
      <div class="body">
        <productsListHeader/>
        <div class="row">
          <leftMenu/>
          <productsList/>
        </div>
        <itemsCart/>
      </div>
    </div>
  </div>
</template>

<script>
  import headerApp from '@/components/header/index'
  import leftMenu from '@/components/leftMenu/index'
  import productsListHeader from '@/components/productsList/header'
  import productsList from '@/components/productsList/index'
  import itemsCart from '@/components/itemsCart/index'

  export default {
    components: {
      headerApp,
      leftMenu,
      productsList,
      productsListHeader,
      itemsCart
    },
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('GET_PRODUCTS');
      this.$store.dispatch('GET_CATEGORIES');
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

  html, body {
    font-family: 'PT Sans', sans-serif;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    height: 100%;
    overflow: hidden;
    user-select: none;
  }

  #__nuxt, #__layout {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    overflow: hidden;
    height: 100%;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    overflow: hidden;
    height: 100%;
  }

  .body-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    overflow: auto;
    height: calc(100% - 67px);
    margin-top: auto;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
    width: 100%;
    padding: 0 88px;
  }
  .row{
    display: flex;
    flex-grow: 2;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;

  }

  h2 {
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
  }

  .el-select{
    .el-input__inner{
      border: none;
      padding: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
    }
  }
  .button{
    background: #1F1F1F;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    padding: 15px 0;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover{
      background: #59606D;
    }
  }
  .el-form{
    .el-form-item{
      margin-bottom: 16px;
      input{
        height: 50px;
        background: #F8F8F8;
        border-radius: 8px;
        width: 100%;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        border: none;
        color: #959DAD;
        outline: 0;
        padding: 0 15px;
        &::placeholder{
          color: #959DAD;
        }
        &:active, &:focus{
          color: #1F1F1F;
        }
      }
    }
  }
</style>
