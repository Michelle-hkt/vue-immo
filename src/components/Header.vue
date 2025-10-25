<script setup>
import HeaderProfil from '@/components/HeaderProfil.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  // On récupère la distance depuis le haut de la page
  isScrolled.value = window.scrollY > 160
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container_home">
      <div class="header_contain">
        <div class="header_contain_left">
          <div class="header_contain_left_image">
            <a href="/home"><img src="../assets/images/logo.png" alt="" /></a>
          </div>
          <ul class="header_contain_menu" :class="{ 'ul_scrolled': isScrolled }">
            <li class="header_contain_menu_item"><a href="#">Accueil</a></li>
            <li class="header_contain_menu_item"><a href="#">Annonces</a></li>
            <li class="header_contain_menu_item"><a href="#">A propos</a></li>
          </ul>
        </div>
        <div class="header_contain_right">
          <HeaderProfil />
          <ul class="header_contain_right_list">
            <li><a href="#" :class="{ 'a_scrolled': isScrolled }">S'inscrire</a ></li>
            <li><a href="#" :class="{ 'a_scrolled': isScrolled }">Se connecter</a></li>
            <div class="menu_hamburger">
              <button class="hamburger_btn">
                <span class="hamburger_box"></span>
                <span class="hamburger_box"></span>
                <span class="hamburger_box"></span>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  position: fixed;
  width: 100%;
  z-index: 120;
  top: 0;
  transition: background-color 0.3s ease;
  padding: 15px;
}
.scrolled {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.ul_scrolled a{
  color: black !important;
}
.header_contain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.header_contain_left {
  display: flex;
  gap: 60px;
}
.header_contain_left_image {
  width: 100px;
  overflow: hidden;
}
.header_contain_left img {
  width: 100%;
  object-fit: cover;
}
.header_contain_menu {
  display: flex;
  align-items: center;
  gap: 90px;
}
.header_contain_menu_item a {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}

.header_contain_right_list {
  display: flex;
  gap: 20px;
  align-items: center;
}
.header_contain_right a {
  /* background-color: #274abb; */
  padding: 8px 20px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid ;
}
.a_scrolled{
  background-color: #274abb!important;
}
.header_contain_right a:hover {
  background-color: #292929;
}
.menu_hamburger {
  display: none;
}
.menu_hamburger_active {
  display: block;
}
.hamburger_btn {
  padding: 7px 5px;
  border: none;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.hamburger_box {
  position: relative;
  width: 30px;
  height: 4px;
  background-color: black;
  display: block;

  border-radius: 8px;
}
</style>
