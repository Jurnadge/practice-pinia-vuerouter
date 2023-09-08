<script>
export default {
  name: "Button",
  props: {
    btnName: String,
  },
};
</script>

<template>
  <button
    class="px-2 py-0.5 rounded-md bg-red-600 text-white hover:scale-110 hover:shadow-sm hover:shadow-black duration-100"
  >
    {{ btnName }}
  </button>
</template>
