<template>
  <div class="header">
    <h1>
      Каталог
    </h1>
    <div class="select">
      <div class="select-title">Сортировать по:</div>
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'По цене'
        }, {
          value: 'Option2',
          label: 'По популярности'
        }],
        value: 'Option1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 32px 0 24px 0;
    .select{
      display: flex;
      align-items: center;
      &-title{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        margin-right: 6px;
      }
    }
  }
</style>
