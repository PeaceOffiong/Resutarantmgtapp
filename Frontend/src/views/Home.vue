<template>
  <nav>
    <Header></Header>
  </nav>
  <h2>Welcome Home</h2>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
</style>
