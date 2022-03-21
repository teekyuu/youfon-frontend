<template>
<!--  //Нав бар-->
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-green " style="box-shadow: 0 0.5rem 1rem #05834e">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/img/favicon.png"  width="24" height="24" class="d-inline-block align-text-top">
          YouFon
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarPc">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Для ПК</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" id="navbarMob" href="#">Для Мобилок</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarcategories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Категории
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link active" id="addWallpaper" to="/add" >Добавить обои</router-link>
            </li>
          </ul>
          <Search/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Search from "@/components/Search";
export default {
  name: "NavBar",
  components: {
    Search
  },
}
</script>

<style scoped>

</style>