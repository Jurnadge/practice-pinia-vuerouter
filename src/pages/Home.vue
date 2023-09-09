<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../store/ProductStore";

const productStore = useProductStore();

onMounted(async () => {
  productStore.getProducts();
});
</script>

<template>
  <div
    v-if="productStore.isLoading == false"
    v-for="(data, index) in productStore.product"
  >
    <div :key="index">
      <p>{{ data.title }}</p>
    </div>
  </div>

  <div v-else="productStore.isLoading">loading</div>
</template>
