<script>
export default {
  name: "Card",
  props: {
    price: Number,
    productName: String,
    detailProduct: String,
  },
};
</script>

<template>
  <div class="w-48 h-64 border bg-sky-700 rounded-md">
    <img
      src="https://www.unigreet.com/wp-content/uploads/2022/11/100-very-special-good-morning-images-quotes-photos.jpg"
      alt=""
      class="object-cover rounded-t-md w-48 h-32"
    />
    <div class="flex flex-col gap-1 mx-1">
      <div class="leading-4 mt-3">
        <p>${{ price }}</p>
        <p>{{ productName }}</p>
      </div>
      <p class="truncate">
        {{ detailProduct }}
      </p>
    </div>
  </div>
</template>
