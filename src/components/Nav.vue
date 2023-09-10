<script setup>
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Button from "./Button.vue";
import { useAuthStore } from "../store/AuthStore";
const authStore = useAuthStore();
</script>

<template>
  <nav
    class="flex flex-row items-center bg-sky-700 w-full h-12 justify-between px-5"
  >
    <router-link :to="{ name: Home }">
      <div class="cursor-pointer">ini Logo</div>
    </router-link>
    <div>
      <div v-if="authStore.isLogin === false" class="flex flex-row gap-5">
        <router-link :to="{ name: Login }">
          <Button btnName="Login" />
        </router-link>
        <router-link :to="{ name: Register }">
          <Button btnName="Register" />
        </router-link>
      </div>
      <div
        v-else="authStore.isLogin"
        @click="authStore.logout"
        class="flex gap-3"
      >
        <Button btnName="Logout" />
        <img src="" alt="" class="w-9 h-9 rounded-full" />
      </div>
    </div>
  </nav>
</template>
