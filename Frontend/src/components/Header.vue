<template>
  <div class="logoM">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdb5uG1eVyNXGWPMMguSKDfXJ2XdTeJljBAw&usqp=CAU"
      alt="Logo of Restaurant mgt"
      class="logo-img"
    />
  </div>
  <ul>
    <li>Add Restaurant</li>
    <li>Update Restaurant</li>
    <li>Logout</li>
  </ul>
</template>

<script>
export default {
  components: Headers,
};
</script>

<style scoped>

.logoM {
  height: 80px;
  width: 100px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img{
    height: 95px;
    width: 100px;
}

ul{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

li{
   cursor: pointer;
   font-size: 16px; 
   text-align: center;
}
</style>
