<script setup>
/* penser a faire le script qui vérifie si l'utilisateur est actif.
si oui changer la couleur de la bordure  en vert. retirer aussi le hover qi simule
*/
</script>
<template>
  <div class="header_profil">
    <img src="../assets/images/go.jpeg" alt="" />
  </div>
</template>
<style>
.header_profil {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #e4e3e3;
  cursor: pointer;
  display: none;
}
.header_profil_active{
    display: block;
}
.header_profil:hover {
  border-color: rgb(1, 207, 1);
}
.header_profil img {
  height: 100%;
  object-fit: cover;
      
}
</style>
