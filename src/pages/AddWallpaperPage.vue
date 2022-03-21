<template>
  <!--   добавить обои-->

  <div class="container">
    <div class="justify-content-center m-4">
      <img :src="imageBase64" class=" row m-auto" style="width: 65%;">
      <div class="row m-auto">
        <form class="col-md-5 m-auto " >
          <div class="mb-3" style="margin-top: 30px">
            <input type="text" v-model="wallpaper.name" placeholder="Название обоев"
                   :class="'form-control ' + (isNotValid ? ' border-danger ' : '')" >
          </div>
          <div class="mb-3">
            <input type="text" v-model="wallpaper.categories" placeholder="Категории"
                   :class="'form-control ' + (isNotValid ? ' border-danger ' : '')" >
          </div>
          <div class="fileUpload btn btn-success " >
            <span><i class="bi bi-paperclip "></i>Выбрать файл</span>
            <input type="file" class="form-control upload " id="file" ref="changeFile" v-on:change="changeFile"/>
          </div>
          <button type="button" @click="saveWallpaper" :class="'fileUpload btn btn-success ' + (isDisable ? 'disabled' : '')">Сохранить</button>

        </form>
      </div>
    </div>

    </div>



</template>

<script>

import axios from "axios";

export default {
  name: "AddWallpaperPage",
  methods:{
    saveWallpaper() {
      this.isNotValid = !this.validateForm()
      if (this.isNotValid)
        return;

      this.isDisable = true;
      // запрос на сохранение wallpaper
      axios.put("/api/v1/wallpaper",this.wallpaper )
          .then((response) => {
            this.wallpaper.id = response.data
            // обертка для файла
            let formData = new FormData();
            formData.append("file", this.imageBinary);
            // запрос на отправку файла
            axios.put(`/api/v1/file/${this.wallpaper.id}`, formData)
            .then(() => {
              this.imageBase64 = '';
              this.imageBinary = null;
              this.wallpaper = {
                id: '',
                name: '',
                categories: '',
              };
              this.isDisable = false;
            })
          })
    },

    changeFile() {
      this.imageBinary = this.$refs.changeFile.files[0]
      this.fileToBase64(this.imageBinary).then((resul) => {
        this.imageBase64 = resul;
      })

    },

    fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      })
    },

    validateForm() {
      if (!this.wallpaper.name) {
        alert("Не заполнено название")
        return false;
      }
      if(!this.imageBase64 && !this.imageBinary) {
        alert("Нет файла")
        return false;
      }
      if(!this.wallpaper.categories){
        alert("Нет категории")
        return false;
      }
      return true;
    },
  },
  data(){
    return {
      imageBase64: '',
      imageBinary: null,
      wallpaper: {
        id: '',
        name: '',
        categories: '',
      },
      isNotValid: false,
      isDisable: false,

    }
  }

}

</script>



