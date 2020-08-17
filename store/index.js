import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      productsList: [],
      categoriesList: [],
      activeCategory: 1,
      itemsCart: [],
      openItemsCart: false,
      //Сервер не работал, для теста
      staticProductsList: [
        {
          category: 1,
          name: "Рюкзак",
          rating: "4.5",
          price: "100 000",
          id: '0'
        }, {
          category: 2,
          name: "Сумка",
          rating: "4.5",
          price: "100 000",
          id: '1'
        }, {
          category: 2,
          name: "Сумка",
          rating: "4.5",
          price: "100 000",
          id: '2'
        }, {
          category: 1,
          name: "Рюкзак",
          rating: "4.5",
          price: "100 000",
          id: '3'
        }, {
          category: 3,
          name: "Что-то еще",
          rating: "4.5",
          price: "100 000",
          id: '4'
        }
      ],
      staticCategoriesList: [
        {
          id: 1,
          name: 'Рюкзаки'
        }, {
          id: 2,
          name: 'Сумки'
        }, {
          id: 3,
          name: 'Что-то еще'
        }
      ],
      staticActiveCategory: 1,
    },
    getters: {
      PRODUCTS_LIST: state => {
        return state.productsList;
      },
      CATEGORIES_LIST: state => {
        return state.categoriesList;
      },
      ACTIVE_CATEGORY: state => {
        return state.activeCategory;
      },
      ITEMS_CART: state => {
        return state.itemsCart;
      },
      ITEMS_CART_STATE: state => {
        return state.openItemsCart;
      },
      //Сервер не работал, для теста
      STATIC_PRODUCTS_LIST: state => {
        return state.staticProductsList;
      },
      STATIC_CATEGORIES_LIST: state => {
        return state.staticCategoriesList;
      },
      STATIC_ACTIVE_CATEGORY: state => {
        return state.staticActiveCategory;
      }
    },
    mutations: {
      SET_PRODUCTS: (state, payload) => {
        state.productsList = payload;
      },
      SET_CATEGORIES: (state, payload) => {
        state.categoriesList = payload;
      },
      SET_ACTIVE_CATEGORY: (state, payload) => {
        state.activeCategory = payload;
      },
      ADD_ITEM_TO_CART: (state, payload) => {
        state.itemsCart.unshift(payload)
      },
      DELETE_ITEM_IN_CART: (state, payload) => {
        state.itemsCart = state.itemsCart.filter(item => ![payload].includes(item));
      },
      CLEAR_ITEMS_CART: (state) => {
        state.itemsCart = []
      },
      TOGGLE_ITEMS_CART: (state) => {
        state.openItemsCart = !state.openItemsCart
      },
      //Сервер не работал, для теста
      SET_STATIC_ACTIVE_CATEGORY: (state, payload) => {
        state.staticActiveCategory = payload;
      },
    },
    actions: {
      GET_PRODUCTS: async (context) => {
        let {data} = await axios.get('http://front-test.idalite.com/api/product')
        context.commit('SET_PRODUCTS', data);
      },
      GET_CATEGORIES: async (context) => {
        let {data} = await axios.get('http://front-test.idalite.com/api/product-category')
        context.commit('SET_CATEGORIES', data);
      },
    },
  })

export default store
