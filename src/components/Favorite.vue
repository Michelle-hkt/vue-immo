<script setup>
import { ref } from 'vue'


const isFavorite = ref(false)


function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}
</script>

<template>
  <div class="favorite_container">
    <i 
      class="fas fa-heart"
      :class="{ favorite: isFavorite }"
      @click="toggleFavorite"
    ></i>
  </div>
</template>

<style scoped>
.favorite_container {
 
  cursor: pointer;  
}
.favorite_container i{
  font-size: 19px;  
}

.fas.fa-heart {
  color: gray;
  transition: color 0.3s; 
}

/* Couleur quand c'est favori */
.fas.fa-heart.favorite {
  color: red;
}
</style>
