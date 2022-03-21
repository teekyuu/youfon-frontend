import Vue from 'vue'
import Router from 'vue-router'

import MainPage from "@/pages/MainPage";
import AddWallpaperPage from "@/pages/AddWallpaperPage";

Vue.use(Router)
export default new Router({
    routes: [
        // { path: '*', component: MainPage },
        { path: '/', name: 'home', component: MainPage },
        { path: '/add', name: 'add', component: AddWallpaperPage }
    ]
})