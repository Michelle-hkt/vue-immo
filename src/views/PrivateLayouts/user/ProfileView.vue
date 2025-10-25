<script setup>
import { ref } from 'vue'

const tagList = ['Appartement', 'Maison', 'Terrain', 'Studio']
const selectedTags = ref([])
const showDropdown = ref(false) // Pour afficher ou masquer le dropdown

function addTag(tag) {
  if (!selectedTags.value.includes(tag)) {
    selectedTags.value.push(tag)
  }
  showDropdown.value = false
}

function removeTag(tag) {
  selectedTags.value = selectedTags.value.filter((t) => t !== tag)
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <div class="profile">
    <div class="profile_contain">
      <div class="profile_contain_top">
        <div class="profile_contain_top_title">Mon compte</div>
        <form action="" class="form">
          <!-- Nom -->
          <div class="form_item">
            <label for="firstname" class="form_label">Nom</label>
            <input type="text" id="firstname" class="form_input" placeholder="Cynthia ADIMOUN" />
          </div>

          <!-- Prénom -->
          <div class="form_item">
            <label for="lastname" class="form_label">Prénom</label>
            <input type="text" id="lastname" class="form_input" placeholder="Cynthia ADIMOUN" />
          </div>

          <!-- Adresse -->
          <div class="form_item">
            <label for="address" class="form_label">Adresse</label>
            <input type="text" id="address" class="form_input" placeholder="Cynthia ADIMOUN" />
          </div>

          <!-- Préférences -->
          <div class="preferences-container">
            <label>Ajouter vos préférences :</label>
            <div class="preferences-input">
              <!-- Tags sélectionnés -->
              <span v-for="(tag, index) in selectedTags" :key="index" class="preference-tag">
                {{ tag }}
                <span class="remove" @click="removeTag(tag)">×</span>
              </span>

              <!-- Bouton + -->
              <button type="button" class="add-btn" @click.stop="toggleDropdown">+</button>

              <!-- liste déroulante -->
              <ul v-if="showDropdown" class="taglist">
                <li v-for="(tag, index) in tagList" :key="index" @click.stop="addTag(tag)">
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Bouton Enregistrer -->
          <div class="form_button">
            <button type="submit">Modifier et Enregistrer </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  margin-bottom: 50px;
}
.profile_contain_top_title {
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 12px 10px;
  
  text-align: center;
  margin-bottom: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.form_item {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.form_item input {
  border-radius: 8px;
  padding: 10px 7px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
}


/* =============Préférences============== */
.preferences-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  position: relative;
}

.preferences-input {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  position: relative; /* nécessaire pour dropdown absolute */
}

.preference-tag {
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.preference-tag .remove {
  cursor: pointer;
  font-weight: bold;
}

.add-btn {
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.taglist {
  position: absolute;
  top: 100%; /* positionné la liste juste en dessous du champ */
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  z-index: 500;
  padding: 0;
  margin-top: 4px;
  list-style: none;
}

.taglist li {
  padding: 8px 10px;
  cursor: pointer;
}

.taglist li:hover {
  background-color: #f5f5f5;
}

.form_button {
  width: 70%;
  display: flex;
  justify-content: end;
}
.form_button button {
  padding: 10px 13px;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
}
</style>
