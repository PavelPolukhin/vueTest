<template>
  <div class="leftMenu">
    <div class="server" v-if="categoriesList.length">
      <div class="item" v-for="item in categoriesList" :key="item.id" @click="setActiveCategory(item.id)">
        <div class="item-name" :class="activeCategory === item.id ? 'active' : ''">{{item.name}}</div>
      </div>
    </div>
    <div class="static" v-else>
      <div class="item" v-for="item in staticCategoriesList" :key="item.id" @click="setStaticActiveCategory(item.id)">
        <div class="item-name" :class="staticActiveCategory === item.id ? 'active' : ''">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{

      }
    },
    computed: {
      categoriesList() {
        return this.$store.getters.CATEGORIES_LIST;
      },
      staticCategoriesList() {
        return this.$store.getters.STATIC_CATEGORIES_LIST;
      },
      activeCategory(){
        return this.$store.getters.ACTIVE_CATEGORY
      },
      staticActiveCategory(){
        return this.$store.getters.STATIC_ACTIVE_CATEGORY
      }
    },
    methods:{
      setActiveCategory(id){
        this.$store.commit('SET_ACTIVE_CATEGORY', id);
      },
      setStaticActiveCategory(id){
        this.$store.commit('SET_STATIC_ACTIVE_CATEGORY', id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .leftMenu{
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    width: 150px;
    min-width: 150px;
    margin-right: 10px;
    .item{
      cursor: pointer;
      &-name{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #959DAD;
        transition: 0.3s ease all;
        &:hover{
          color: #59606D;
        }
      }
    }
    .active{
      text-decoration: underline;
      color: #1F1F1F;
    }
  }
</style>
