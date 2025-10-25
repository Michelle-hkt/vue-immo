<script setup>
import Favorite from '@/components/Favorite.vue'
import { defineProps } from 'vue'
const props = defineProps({
  propertyImage: {
    type: String,
    default: '/src/assets/images/banner.jpeg',
  },
  title: {
    type: String,
    default: 'N/A',
  },
  location: {
    type: String,
    default: 'N/A',
  },
  status: {
    type: String,
    default: 'N/A',
  },
  price: {
    type: Number,
    default: 0,
  },
  livingRoom: {
    type: Number,
    default: 0,
  },
  bedroom: {
    type: Number,
    default: 0,
  },
  bathrooms: {
    type: Number,
    default: 0,
  },
  kitchen: {
    type: Number,
    default: 0,
  },
})
console.log(
  props.propertyImage,
  props.title,
  props.location,
  props.status,
  props.price,
  props.bathrooms,
  props.livingRoom,
  props.bedroom,
  props.kitchen,
)
</script>

<template>
  <div class="recent_contain_list_item">
    <!-- Penser a corriger le lien -->
    <div class="recent_contain_list_item_img">
      <RouterLink to="/home">
        <img :src="props.propertyImage" alt="props.title" />
      </RouterLink>
      <p class="recent_contain_list_item_info_status">{{ props.status }}</p>
    </div>

    <div class="recent_contain_list_item_description">
      <RouterLink to="/home" class="descrition_top">
        <p class="recent_contain_list_item_info_title">{{ props.title }}</p>
        <p class="recent_contain_list_item_info_location">{{ props.location }}</p>
      </RouterLink>
      <div class="recent_contain_list_item_details">
        <p>{{ props.bedroom }} chambres</p>
        <p>{{ props.bathrooms }} toilletes</p>
      </div>
      <div class="recent_contain_list_item_details">
        <p>{{ props.livingRoom }} salon</p>
        <p>{{ props.kitchen }} cuisines</p>
      </div>
    </div>
    <div class="recent_contain_list_item_other">
      <p class="recent_contain_list_item_price">{{ props.price }} FCFA</p>
      <Favorite />
    </div>
  </div>
</template>

<style>
.recent_contain_list_item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  width: 400px;
  box-shadow: 0 2px 8px #0000001a;

}

.recent_contain_list_item_img {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  cursor: pointer;
}
.recent_contain_list_item_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.recent_contain_list_item_info_status {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #007bff;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}
.recent_contain_list_item:hover .recent_contain_list_item_img img {
  transform: scale(1.05);
}
.recent_contain_list_item_description {
  padding: 10px 25px 0px 15px;
}

.recent_contain_list_item_info_title {
  font-size: 18px;
  font-weight: 600;
  color: #444;
  margin-bottom: 5px;
  cursor: pointer;
}

.recent_contain_list_item_info_location {
  font-size: 13px;
  color: #777;
  font-weight: 400;
  margin-bottom: 25px;
  cursor: pointer;
}

.recent_contain_list_item_details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}
.recent_contain_list_item_other {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  border-top: 1px solid #f0f0f0;
}

.recent_contain_list_item_price {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
}
</style>
