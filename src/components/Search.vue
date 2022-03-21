<template>
  <form class="d-flex">
    <input class="form-control me-2" v-model="searchText"  type="search" placeholder="Поиск" aria-label="Search">
    <button class="btn btn-outline-dark" @click="search" type="button">Поиск</button>
  </form>
</template>

<script>
export default {
  name: "Search",
  data: function (){
    return{
      searchText: ''
    }
  },
  methods: {
     search: function(){
       let array = this.searchText.split(' ');

       console.log(array)
     }
  }
}
</script>

<style scoped>

</style>