import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false, // Mengubah "Boolean" ke "false"
    error: "", // Mengubah "String" ke ""
    isLogin: false,
    token: localStorage.getItem("token") || "",
  }),
  getters: {
    userData: (state) => state.user,
    isLoading: (state) => state.loading,
    isError: (state) => state.error,
    isAuthenticated: (state) => !!state.token, // Menambahkan getter isAuthenticated
  },
  actions: {
    checkAuth() {
      const router = useRouter();
      if (this.isAuthenticated) {
        this.isLogin = true;
      } else {
        router.push("/login");
      }
    },
    async login(username, password) {
      try {
        const response = await axios.post(
          "https://landtick-cuy.fly.dev/api/v1/login",
          {
            username: username,
            password: password,
          }
        );

        if (response.status === 200) {
          this.user = response.data.data;
          this.token = response.data.data.user.token;
          localStorage.setItem("token", this.token);
          this.isLogin = true;
          this.error = "";
          console.log(this.token);
          console.log(this.user);
        }
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("token");
      this.user = null;
      this.token = "";
      this.isLogin = false;
      const router = useRouter();
      router.push("/login");
      window.alert("Anda telah berhasil logout.");
    },
  },
});
