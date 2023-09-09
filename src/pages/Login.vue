<script setup>
import Button from "../components/Button.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  try {
    await axios.post("/login"),
      {
        email: form.value.email,
        password: form.value.password,
      };
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <form
      class="flex flex-col gap-5 border p-10 bg-white rounded-xl shadow-xl w-1/3"
      @submit.prevent="handleLogin"
    >
      <h1 class="text-2xl my-3 text-center">Login</h1>
      <input
        type="email"
        placeholder="Email"
        v-model="form.email"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        v-model="form.password"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <Button
        type="submit"
        btnName="Login"
        class="py-2 hover:scale-100 hover:shadow-transparent"
      />

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
