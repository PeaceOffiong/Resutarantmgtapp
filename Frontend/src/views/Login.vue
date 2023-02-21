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
    <small>{{ alertM.message }}</small>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />
      <input
        type="submit"
        name="sign-up"
        class="submit"
        :disabled="email && password === ''"
      />
    </form>
    <p>
      You don't have an account? <RouterLink to="/signup">Signup</RouterLink>
    </p>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import app from "../services/index";
import { reactive } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const people = ref([]);
    const alertM = reactive({
      message: ""
    })


    const router = useRouter();

    const fetchUsers = () => {
      app
        .fetchData()
        .then((data) => (people.value = data))
        .then((data) => console.log(people.value));
    };

    onMounted(() => {
      fetchUsers();
      console.log(people.value);
    });

    const handleSubmit = () => {
      console.log("hmm");
      const existingPerson = people.value.find((each) => {
        if (each.email === email.value && each.password === password.value) {
          return each;
        }
      });
      const exisitingEmail = people.value.find(each => each.email === email.value);

      if (existingPerson && exisitingEmail) {
        localStorage.setItem("token", "845309849543092");
        router.push({ name: "home" });
      } else if (exisitingEmail) {
        alertM.message = "Incorrect Password"
      } else {
        alertM.message ="User does not exist "
      }
      email.value = "";
      password.value = "";
    };

    return {
      alertM,
      email,
      password,
      handleSubmit,
      fetchUsers,
    };
  },
};
</script>

<style></style>
