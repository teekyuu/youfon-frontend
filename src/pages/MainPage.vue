<template>
  <div class="container">
    <div class="justify-content-center row">

      <WallpaperItem
          v-for="wallpaper in wallpaperList"
          :key="wallpaper.id"
          :wallpaper ="wallpaper"
          :msg="'Hello world'"  />
    </div>
</div>
</template>

<script>
import WallpaperItem from "@/components/WallpaperItem";
import axios from 'axios';

export default {
  name: "MainPage",
  components: {
    WallpaperItem
  },
  data(){
    return {
      wallpaperList: [],

    }
  },

  created() {
    axios
        .get("/api/v1/wallpaper")
        .then((response) => {
          this.wallpaperList = response.data
        })
  },

}

</script>

<style scoped>

</style>