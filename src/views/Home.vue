<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
      </span>
      <InputText placeholder="Username" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InputText from "primevue/inputtext";

export default {
  name: "Home",
  components: {
    InputText,
  },
};
</script>
<style  scoped>
.home{
  margin-top: 8rem;
}
</style>
