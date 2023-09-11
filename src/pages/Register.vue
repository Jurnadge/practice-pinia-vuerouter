<script setup>
import Button from "../components/Button.vue";
import { useAuthStore } from "../store/AuthStore";
import { ref } from "vue";

const store = useAuthStore();
const form = ref({
  fullname: "",
  username: "",
  email: "",
  password: "",
  no_hp: "",
  address: "",
  gender: "",
});

const handleChange = (event, fieldName) => {
  form[fieldName] = event.target.value;
};

const handleRegister = async () => {
  await store.register(
    form.fullname,
    form.username,
    form.email,
    form.password,
    form.no_hp,
    form.address,
    form.gender
  );
};
</script>

<template>
  <div class="h-screen flex justify-center items-center my-20">
    <form
      @submit.prevent="handleRegister"
      class="flex flex-col gap-5 border p-10 bg-white rounded-xl shadow-xl w-10/12 lg:w-1/3 md:w-1/2"
    >
      <h1 class="text-2xl my-3 text-center">Register</h1>
      <input
        type="text"
        placeholder="Fullname"
        @change="handleChange($event, 'fullname')"
        v-model="form.fullname"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="text"
        placeholder="Username"
        @change="handleChange($event, 'username')"
        v-model="form.username"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="email"
        placeholder="Email"
        @change="handleChange($event, 'email')"
        v-model="form.email"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        @change="handleChange($event, 'password')"
        v-model="form.password"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        @change="handleChange($event, 'no_hp')"
        v-model="form.no_hp"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
        required
      />
      <textarea
        @change="handleChange($event, 'address')"
        v-model="form.address"
        placeholder="Address"
        rows="4"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
      />
      <select
        @change="handleChange($event, 'gender')"
        v-model="form.gender"
        class="border rounded-md px-2 py-1 focus:ring-0 focus:outline-none focus:border-blue-400"
      >
        <option value="">Select Gender</option>
        <option value="Man">Man</option>
        <option value="Women">Women</option>
      </select>
      <Button
        type="submit"
        btnName="Register"
        class="py-2 hover:scale-100 hover:shadow-transparent"
      />

      <div class="text-center text-slate-400">
        <p>
          You have an account?
          <b class="cursor-pointer hover:text-black underline">Here</b>
        </p>
      </div>
    </form>
  </div>
</template>
