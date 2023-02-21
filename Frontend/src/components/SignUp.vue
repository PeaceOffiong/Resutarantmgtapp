<template>
  <section class="sign-up">
    <div class="img-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdb5uG1eVyNXGWPMMguSKDfXJ2XdTeJljBAw&usqp=CAU"
        alt="Resturant Logo"
        class="logo"
      />
    </div>
    <h3>Sign Up</h3>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Enter Name" v-model="name" />
      <small v-show="alert.email.truthValue">{{ alert.email.message }}</small>
      <input type="email" placeholder="Enter Email" v-model="email" />
      <small v-show="alert.password.truthValue">{{
        alert.password.message
      }}</small>
      <input type="password" placeholder="Enter Password" v-model="password" />
      <small v-show="alert.confirmPassword.truthValue">{{
        alert.confirmPassword.message
      }}</small>
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />
      <input
        type="submit"
        name="sign-up"
        class="submit"
        :disabled="name && email && password && confirmPassword === ''"
      />
    </form>
    <p>You already have an account? <RouterLink to="/login">Login</RouterLink></p>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import services from "../services/index";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const router = useRouter();

const alert = reactive({
  password: {
    message: "",
    truthValue: false,
  },
  confirmPassword: {
    message: "",
    truthValue: false,
  },
  email: {
    message: "",
    truthValue: false,
  },
});

const handleSubmit = () => {
  if (confirmPassword.value !== password.value) {
    alert.password.message = "password does not align";
    alert.confirmPassword.message = "please input password again";
    alert.password.truthValue = true;
    alert.confirmPassword.truthValue = true;
  }

  const tokens = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  services.updateUsers(tokens).then((response) => {
    if (response.data === "email already exists") {
      alert.email.message = "Email is already associated with another account";
      alert.email.truthValue = true;
    } else if (response.data === "successful bitches") {
      localStorage.setItem("token", tokens);
      router.push({ name: "Restaurants" });
      password.value = "";
      name.value = "";
      email.value = "";
      confirmPassword.value = "";
    }
  });
};
</script>

<style>
small {
  color: red;
}
.sign-up {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
small {
  height: 5px;
  align-self: flex-start;
}

.img-container {
  height: 115px;
  overflow: hidden;
}
.logo {
  margin-top: 15px;
  height: 115px;
  width: 75px;
}

h3 {
  font-size: 34px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 0.5px;
  font-weight: 600;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 13px;
}
input {
  height: 43px;
  width: 335px;
  font-size: 17px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  padding-left: 10px;
}

input[type="submit"]:disabled {
  cursor: not-allowed;
  background-color: rgb(141, 138, 138);
}

.submit {
  margin-top: 15px;
  background-color: black;
  color: #fff;
  cursor: pointer;
}

@media (min-width: 740px) {
  input {
    width: 500px;
  }
  .logo {
    height: 120px;
    width: 85px;
  }
}

@media (max-width: 330px) {
  input {
    width: 250px;
  }
}
</style>
