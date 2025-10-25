<script setup>
import { ref } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper/modules'
import AnnouncementBox from '@/components/AnnouncementBox.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const type = ref('')
const category = ref('')
const location = ref('')
const price = ref('')

// Options pour les selects
const typeOptions = ['Appartement', 'Maison', 'Terrain', 'boutique']
const categoryOptions = ['A vendre', 'A louer']
const AdList = [
  {
    propertyImage: '/src/assets/images/p1.jpeg',
    title: 'Appartement moderne',
    location: "Akpakpa, Cotonou - non loin de l'hôpital",
    status: 'A louer',
    price: '150 000',
    bathrooms: '2',
    salon: '1',
    bedroom: '3',
    kitchen: '1',
    livingRoom: '1',
  },
  {
    propertyImage: '/src/assets/images/p3.jpeg',
    title: 'Villa de luxe',
    location: "Carrefour Zicco, Cotonou - non loin de l'hotel",
    status: 'A vendre',
    price: '120 000 000',
    bathrooms: '5',
    salon: '2',
    bedroom: '6',
    kitchen: '2',
    livingRoom: '2',
  },
  {
    propertyImage: '/src/assets/images/p4.jpeg',
    title: 'Boutique commerciale',
    location: 'Haie Vive, Cotonou - axe commerçant',
    status: 'A louer',
    price: '150 000',
    bathrooms: '2',
    salon: '1',
    bedroom: '3',
    kitchen: '1',
    livingRoom: '1',
  },
  {
    propertyImage: '/src/assets/images/p5.jpeg',
    title: 'Studio cosy',
    location: 'Vossa, Cotonou - quartier résidentiel',
    status: 'A louer',
    price: '60 000',
    bathrooms: '1',
    salon: '0',
    bedroom: '1',
    kitchen: '1',
    livingRoom: '0',
  },
  {
    propertyImage: '/src/assets/images/p6.jpeg',
    title: 'Villa de luxe',
    location: 'Agla, Cotonou - proche de la lagune',
    status: 'A vendre',
    price: '120 000 000',
    bathrooms: '4',
    salon: '2',
    bedroom: '5',
    kitchen: '2',
    livingRoom: '2',
  },

  {
    propertyImage: '/src/assets/images/p8.jpeg',
    title: 'Appartement moderne',
    location: 'Akpakpa Marché, Cotonou - proche des transports',
    status: 'A louer',
    price: '350 000',
    bathrooms: '1',
    salon: '0',
    bedroom: '0',
    kitchen: '0',
    livingRoom: '0',
  },
]
const categoryTable = [
  {
    name: 'Appartement',
    description: 'Trouvez votre appartement idéal, moderne et lumineux !',
    img: '/src/assets/icons/appart2.png',
  },
  {
    name: 'Maison',
    description: 'Découvrez la maison parfaite pour votre famille.',
    img: '/src/assets/icons/maison2.png',
  },
  {
    name: 'Terrain',
    description: 'Dénichez le terrain qui concrétisera votre projet.',
    img: '/src/assets/icons/terrain2.png',
  },
  {
    name: 'boutique',
    description: 'Trouvez la boutique idéale pour lancer votre activité.',
    img: '/src/assets/icons/boutique2.png',
  },
]
</script>
<template>
  <!-- Banner -->
  <section class="banner">
    <div class="container">
      <div class="banner_contain">
        <!-- titre et text -->
        <div class="banner_contain_text">
          <div class="banner_contain_text_title">
            <h1>Trouvez ce que vous cherchez en un clic</h1>
            <div class="banner_sub_title">
              <h5>
                Explorez une large gamme de maisons, appartements et terrains soigneusement
                sélectionnés, et trouvez facilement le bien qui correspond exactement à vos besoins
                et envies.
              </h5>
            </div>
          </div>
        </div>
        <!-- formulaire de recherche -->
        <div class="banner_contain_searchbar">
          <form class="search_form">
            <!-- input Type -->
            <select v-model="type" class="search_field">
              <option value="" disabled selected>Type</option>
              <option v-for="(opt, index) in typeOptions" :key="index" :value="opt">
                {{ opt }}
              </option>
            </select>

            <!-- input Catégorie -->
            <select v-model="category" class="search_field">
              <option value="" disabled selected>Catégorie</option>
              <option v-for="(opt, index) in categoryOptions" :key="index" :value="opt">
                {{ opt }}
              </option>
            </select>

            <!-- input Lieux -->
            <input v-model="location" type="text" placeholder="Lieux" class="search_field" />

            <!-- input Prix -->
            <input v-model="price" type="text" placeholder="Prix" class="search_field" />

            <!-- input Bouton -->
            <button type="submit" class="search_button">Rechercher</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Propriété recentes -->
  <section class="recent">
    <div class="container">
      <div class="recent_contain">
        <SectionTitle h3Title="LES PLUS" h2Title="RECENTS" />
        <div class="recent_contain_bottom">
          <Swiper
            :modules="[Pagination, Autoplay]"
            :slides-per-view="3"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :space-between="10"
            pagination
            class="recent_swiper"
          >
            <SwiperSlide v-for="(ad, index) in AdList" :key="index">
              <AnnouncementBox v-bind="ad" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
  <!-- Ce que nous proposons -->
  <section class="service parallax parallax-1">
    <div class="container">
      <div class="service_contain">
        <div class="service_contain_top">
          <SectionTitle h3Title="CE QUE NOUS" h2Title="PROPOSONS" />
        </div>
        <div class="service_contain_bottom">
          <div
            class="service_contain_bottom_item"
            v-for="(category, index) in categoryTable"
            :key="index"
          >
            <div class="service_contain_bottom_item_logo"><img :src="category.img" alt="" /></div>
            <div class="service_contain_bottom_item_title">{{ category.name }}</div>
            <div class="service_contain_bottom_item_texte">{{ category.description }}</div>
            <RouterLink to="/home" class="service_contain_bottom_item_link"
              >Explorer <i class="fas fa-arrow-right"></i
            ></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- les plus populaires -->
  <section class="popular">
    <div class="container">
      <div class="popular_contain">
        <div class="popular_contain_top">
          <SectionTitle h3Title="LES PLUS" h2Title="POPULAIRES" />
        </div>
        <div class="popular_contain_bottom">
          <AnnouncementBox
            v-for="(ad, index) in AdList"
            :key="index"
            :propertyImage="ad.propertyImage"
            :title="ad.title"
            :location="ad.location"
            :status="ad.status"
            :price="ad.price"
            :bathrooms="ad.bathrooms"
            :livingRoom="ad.livingRoom"
            :bedroom="ad.bedroom"
            :kitchen="ad.kitchen"
          >
          </AnnouncementBox>
        </div>
        <div class="popular_contain_bottom_button">
          <button>Voir plus<i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  </section>
  <!-- PROMOTEUR -->
  <section class="promotor parallax parallax-2">
    <div class="container">
      <div class="promotor_contain">
        <div class="promotor_contain_top">
          <SectionTitle h3Title="VOUS ÊTES AUSSI" h2Title="PROMOTEUR" />
        </div>
        <div class="promotor_contain_text">Vendez vos biens en juste trois étapes</div>
        <div class="promotor_contain_bottom">
          <div class="promotor_contain_botttom_item">
            <span class="item_logo"><img src="@/assets/icons/news.png" alt=""></span>
            <p class="item_title">Créer une annonce</p>
            <p class="item_text">
              Donnez vie à votre bien en quelques clics. Décrivez-le, ajoutez des photos et mettez
              en avant ses atouts !
            </p>
          </div>
          <div class="promotor_contain_botttom_item">
            <span class="item_logo"><img src="@/assets/icons/VVt.png" alt=""></span>
            <p class="item_title">Ajoutez une visite virtuelle</p>
            <p class="item_text">
              Offrez une expérience immersive à vos visiteurs. Permettez-leur de découvrir votre
              bien sans se déplacer !
            </p>
          </div>
          <div class="promotor_contain_botttom_item">
            <span class="item_logo"><img src="@/assets/icons/pub.png" alt=""></span>
            <p class="item_title">Publiez l'annonce</p>
            <p class="item_text">
              Rendez votre bien visible auprès de milliers d’acheteurs potentiels. Publier, c’est
              franchir la première étape vers la vente !
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.banner {
  display: block;
  height: 100vh;
  position: relative;
  z-index: 99;
  background-image:
    linear-gradient(#00000033 0%, #00000033), url('@/assets/images/banner_home.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner_contain {
  display: flex;
  flex-direction: column;
}
.banner_contain_text_title {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
}
.banner_contain_text_title h1 {
  color: #fff;
  font-size: 45px;
  line-height: 66px;
  font-weight: 700;
  margin-bottom: 30px;
}
.banner_sub_title {
  width: 600px;
  text-align: center;
}
.banner_contain_text_title h5 {
  color: #fff;
  font-size: 18px;
}
.banner .container {
  width: 100%;
  max-width: 1300px;
}
/* ============== la searchbar =============== */
.banner_contain_searchbar {
  border: 1px solid #ebebeb;
  box-shadow: 0px 0px 0px 8px #ffffff33;
  padding: 30px 20px;
  border: none;
  background-color: #fff;
  border-radius: 10px;
}
.search_form {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
}
.search_field {
  padding: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  width: 90%;
  cursor: pointer;
}
.search_field:focus {
  border-color: #274abb;
}
.search_button {
  padding: 15px 20px;
  background-color: #274abb;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.5s ease;
  border: 1px solid #274abb;
}
.search_button:hover {
  background-color: #ffffff;
  color: #274abb;
  border: 1px solid #000;
}

/* ============= proriété recentes=========== */
.recent {
  padding: 60px 0px;
  background-color: #f5f7fb !important;
}
.recent_contain_bottom {
  width: 100%;
  padding: 20px 0px;
}

.recent_swiper {
  width: 100%;
}
/* =========Parallax============ */
.parallax {
  position: relative;
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.parallax::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.4);
}

.parallax .content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}
.parallax-1 {
  background-image: linear-gradient(#00000033 0%, #00000033), url('@/assets/images/mb.jpeg');
}
.parallax-2 {
  background-image: linear-gradient(#00000033 0%, #00000033), url('@/assets/images/promo.jpeg');
}

/* ============== SERVICE PROPOSÉ=========== */
.service {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.service_contain {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.service_contain_bottom {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.service_contain_bottom_item {
  background-color: #0f161c;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06) !important;
  padding: 35px 25px 30px 25px;
}
.service_contain_bottom_item_logo {
  position: absolute;
  z-index: 30;
  top: -35px;
  right: 15px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #274abb;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.service_contain_bottom_item_logo img {
  object-fit: cover;
  width: 50px;
  height: 50px;
}
.service_contain_bottom_item_title {
  color: #fff;
  font-weight: 600;
  margin-bottom: 18px;
  font-size: 18px;
}
.service_contain_bottom_item_texte {
  color: #fff;
  line-height: 26px;
  margin-bottom: 15px;
}
.service_contain_bottom_item_link {
  color: #fff !important;
  cursor: pointer;
}
.service_contain_bottom_item_link:hover {
  color: #ff385c !important;
}
.service_contain_bottom_item_link i:hover {
  color: #ff385c !important;
}
/*============ LES PLUS POPULAIRES ============== */
.popular {
  padding: 80px 0px 50px 0px;
  background-color: #f5f7fb;
}
.popular_contain_bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.popular_contain_bottom_button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
}
.popular_contain_bottom_button button {
  background-color: #274abb;
  color: #fff;
  border: none;
  padding: 13px 25px;
  border-radius: 36px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.popular_contain_bottom_button button:hover {
  background-color: #0f161c;
  padding: 13px 27px;
  font-size: 20px;
}
.popular_contain_bottom_button button i {
  color: #fff;
  margin-left: 10px;
}
/* ========== PROMOTEUR =========== */
.promotor_contain {
  padding: 50px 0px 0px 0px;
}
.promotor_contain_text {
  font-size: 28px;
  color: #000;
  font-weight: bold;
  margin-bottom: 30px;
}
.promotor_contain_bottom {
  display: flex;
  align-items: center;
  gap: 30px;
}
.promotor_contain_botttom_item {
  background-color: #ebebeb;
  padding: 20px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: transform 0.4s ease;
  cursor: pointer;
}
.promotor_contain_botttom_item:hover {
  transform: scale(1.05);
}
.item_logo img{
  width: 50px;
  margin-bottom: 30px;
  margin-top: 10px;
}
.item_title{
  font-weight: bold;
  font-size: 18px;
  color:#0f1b26;
  margin-bottom:15px
}
.item_text{
  text-align: center;
}
</style>
