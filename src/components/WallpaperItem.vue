<template>
<!--  /// картинка-->

  <div class="card m-3 bg-light-green  p-0 border-1 border-hover-green"  style="width: 20rem;">
    <img v-if="wallpaper.fileId" :src="imgLink" class="card-img-top" alt="...">
    <img v-else src="../assets/logo.png" class="card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title text-dark">{{wallpaper.name}}</h5>
<!--      <a class="btn btn-category rounded-0 p-1 m-1"-->
<!--         v-for="category in wallpaper.categoryList"-->
<!--         :key="category.id"-->
<!--      >{{category.name}}</a>-->
    </div>
  </div>

</template>

<script>
export default {
  name: "WallpaperItem",
  props: {
    wallpaper: Object,
  },
  data(){
    return{
      imgLink : ''
    }
  },
  created() {
    this.imgLink = `http://localhost:9000/api/v1/file/${this.wallpaper.fileId}/content`
  }

}

</script>

<style scoped>
</style>