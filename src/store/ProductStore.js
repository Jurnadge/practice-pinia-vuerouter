import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("products", {
  state: () => ({
    product: null,
    loading: true,
    error: Boolean,
  }),
  getters: {
    products: (state) => state.product,
    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  actions: {
    async getProducts() {
      const data = await axios.get("/products");
      this.product = data.data?.products;
      this.loading = false;
      this.error = false;
      console.log(this.product);
    },
  },
});
