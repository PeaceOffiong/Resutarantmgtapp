<template>
  <section class="sign-up">
    <div class="img-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdb5uG1eVyNXGWPMMguSKDfXJ2XdTeJljBAw&usqp=CAU"
        alt="Resturant Logo"
        class="logo"
      />
    </div>
    <h3>Login</h3>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Enter Name" v-model="name" />
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input
        type="submit"
        name="sign-up"
        class="submit"
        :disabled="email && password === ''"
      />
    </form>
  </section>
</template>

<script>
import { ref } from "vue";
import useFetch from "../services/customFetch";

export default {
  setup() {
    const name = ref("");
    const email = ref("");

    const data = useFetch("http://localhost:3002/api/restaurants/users")
        const filteredUser = data.find(user => user.email === email);

        console.log(filteredUser)

    
    const handleSubmit = () => {};

    return {
      name,
      email,
      handleSubmit,
    };
  },
};
</script>

<style></style>
