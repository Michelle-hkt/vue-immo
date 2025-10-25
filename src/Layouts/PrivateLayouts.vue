<script setup>
import { ref } from 'vue'

const selectedFile = ref(null)

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0]
  console.log('Fichier sélectionné :', selectedFile.value)
}

const triggerFileInput = () => {
  document.getElementById('fileUpload').click()
}
</script>

<template>
  <section class="box">
    <div class="banner">
      <div class="container">
        <div class="banner_left">
          <h1 v-if="$route.path === '/user/profile'">Mon profile</h1>
          <h1 v-if="$route.path === '/user/announcements'">Mes annonces</h1>
          <h1 v-if="$route.path === '/user/favorites'">Mes favories</h1>
          <h1 v-if="$route.path === '/user/notifications'">Mes notifications</h1>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="main_contain">
          <div class="main_contain_left">
            <div class="main_contain_left_img">
              <img src="../assets/images/go.jpeg" alt="" />
              <!-- Bouton Upload -->
              <button class="upload-btn" @click="triggerFileInput">Changer la photo</button>
              <input id="fileUpload" type="file" @change="handleFileUpload" style="display: none" />
            </div>
            <ul class="main_contain_left_menu">
              <li class="main_contain_left_menu__item">
                <span :class="{ icon_active_section: $route.path === '/user/profile' }"
                  ><img src="../assets/icons/person.png" alt=""
                /></span>
                <RouterLink to="/user/profile" @click="isSidebarVisible = false">
                  <p :class="{ text_active_section: $route.path === '/user/profile' }">Profile</p>
                </RouterLink>
              </li>

              <li class="main_contain_left_menu__item">
                <span :class="{ icon_active_section: $route.path === '/user/announcements' }"
                  ><img src="../assets/icons/ad.png" alt=""
                /></span>
                <RouterLink to="/user/announcements" @click="isSidebarVisible = false">
                  <p :class="{ text_active_section: $route.path === '/user/announcements' }">
                    Annonces
                  </p>
                </RouterLink>
              </li>

              <li class="main_contain_left_menu__item">
                <span :class="{ icon_active_section: $route.path === '/user/favorites' }"
                  ><img src="../assets/icons/star.png" alt=""
                /></span>
                <RouterLink to="/user/favorites" @click="isSidebarVisible = false">
                  <p :class="{ text_active_section: $route.path === '/user/favorites' }">
                    Favories
                  </p>
                </RouterLink>
              </li>

              <li class="main_contain_left_menu__item">
                <span :class="{ icon_active_section: $route.path === '/user/notifications' }"
                  ><img src="../assets/icons/notif.png" alt=""
                /></span>
                <RouterLink to="/user/notifications" @click="isSidebarVisible = false">
                  <p :class="{ text_active_section: $route.path === '/user/notifications' }">
                    Notifications
                  </p>
                </RouterLink>
              </li>

              <li class="main_contain_left_menu__item">
                <span><img src="../assets/icons/1.png" alt="" /></span>
                <RouterLink to="/home" @click="isSidebarVisible = false">Déconnection</RouterLink>
              </li>
            </ul>
          </div>
          <div class="main_contain_right">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===================== Banner =================== */
.banner {
  width: 100%;
  height: 280px;
  background-image: linear-gradient(#00000099, #000000b3), url('../assets/images/banner.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 60px;
}
.banner_left {
  color: #f3f2f2;
  padding-left: 50px;
  padding-top: 100px;
}
/* ==================== main =======================*/
.icon_active_section {
  background-color: red !important;
}
.text_active_section {
  color: red !important;
}

.main_contain {
  display: flex;
  gap: 20px;
}
/* ============= main_left ==============*/

.main_contain_left {
  max-width: 260px;
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: auto;
}
.main_contain_left_img {
  position: relative;
  height: 260px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 40px;
}
.main_contain_left_img img {
  
  object-fit: cover;
}
.upload-btn {
  position: absolute;
  bottom: 10px;
  left: 20%;
  background-color: white;
  border: 1px solid #ccc;
  padding: 6px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

.upload-btn:hover {
  background-color: #f0f0f0;
}
.main_contain_left_menu__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
}
.main_contain_left_menu__item:hover {
  cursor: pointer;
  background-color: #edebeb;
}
.main_contain_left_menu__item span {
  width: 35px;
  height: 35px;
  padding: 4px;
  border-radius: 50%;
  background-color: #edebeb;
}

/* ============= main_right ==============*/
.main_contain_right {
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: auto;
  flex: 1;
}
</style>

