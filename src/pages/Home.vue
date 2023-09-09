<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../store/ProductStore";
import Card from "../components/Card.vue";

const productStore = useProductStore();

onMounted(async () => {
  productStore.getProducts();
});
</script>

<template>
  <h1 class="text-center text-3xl mt-4">List of Products</h1>
  <!-- <div
    v-if="productStore.isLoading == false"
    v-for="(data, index) in productStore.product"
  >
    <div :key="index">
      <p>{{ data.title }}</p>
    </div>
  </div>

  <div v-else="productStore.isLoading">loading</div> -->
  <div class="w-full flex flex-wrap justify-center gap-5 mt-5">
    <div v-for="(data, index) in productStore.product">
      <Card
        :key="index"
        :price="data.price"
        :productName="data.title"
        :detailProduct="data.description"
      />
    </div>
  </div>
</template>
