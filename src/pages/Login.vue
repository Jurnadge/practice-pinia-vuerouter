<script setup>
import Button from "../components/Button.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/AuthStore";

const router = useRouter();
const store = useAuthStore();

const form = ref({
  username: "",
  password: "",
});

const handleChange = (event, fieldName) => {
  form[fieldName] = event.target.value;
};

const handleLogin = async () => {
  try {
    await store.login(form.username, form.password); // Memanggil fungsi login dari store

    // Jika login berhasil, alihkan pengguna ke halaman lain (misalnya, halaman beranda)
    if (store.isLogin) {
      // Jika isLogin true, pengguna berhasil login
      router.push("/");
    }
  } catch (error) {
    // Tangani kesalahan jika terjadi saat permintaan
    console.error(error);
  }
};
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <form
      class="flex flex-col gap-5 border p-10 bg-white rounded-xl shadow-xl w-10/12 lg:w-1/3 md:w-1/2"
      @submit.prevent="handleLogin"
    >
      <h1 class="text-2xl my-3 text-center">Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        v-model="form.username"
        @change="handleChange($event, 'username')"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        @change="handleChange($event, 'password')"
        v-model="form.password"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <Button
        type="submit"
        btnName="Login"
        class="py-2 hover:scale-100 hover:shadow-transparent"
        v-if="store.isLoading === false"
      />
      <button v-else="store.isLoading === true" disabled>loading</button>

      <div class="text-center text-slate-400">
        <p class="cursor-pointer hover:text-black">
          Forget <span class="underline">password?</span>
        </p>
        <p>
          Not a member yet? click
          <b class="cursor-pointer hover:text-black underline">Here</b>
        </p>
      </div>
    </form>
  </div>
</template>
