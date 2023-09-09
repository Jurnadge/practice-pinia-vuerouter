<script setup>
import Button from "../components/Button.vue";
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <form
      class="flex flex-col gap-5 border p-10 bg-white rounded-xl shadow-xl w-1/3"
    >
      <h1 class="text-2xl my-3 text-center">Register</h1>
      <input
        type="text"
        placeholder="Username"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="email"
        placeholder="Email"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <Button
        type="submit"
        btnName="Register"
        class="py-2 hover:scale-100 hover:shadow-transparent"
      />

      <div class="text-center text-slate-400">
        <p class="cursor-pointer hover:text-black">
          Forget <span class="underline">password?</span>
        </p>
        <p>
          You have an account?
          <b class="cursor-pointer hover:text-black underline">Here</b>
        </p>
      </div>
    </form>
  </div>
</template>
