<template>
  <!-- <el-menu
    :default-active="activeIndex"
    class="el-menu-demo top-bar"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="goToHome">Home</el-menu-item>

    <el-menu-item index="2"><span @click="goToLogin">Login</span></el-menu-item>
  </el-menu> -->
  <div id="nav">
    <router-link to="/">Home </router-link> |
    <router-link to="/login">Login </router-link> |
    <router-link to="/project">Project </router-link>  |
    <router-link to="/about">About </router-link> |
    <router-link to="/signin">Sign In </router-link>

  </div>
  <div>

  </div>
  <router-view />
</template>
<script>
// import InputText from 'primevue/inputtext/sfc';

export default {
  components: {
    // InputText,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goToHome() {
      this.$route.push("/");
    },
    goToLogin() {
      this.$route.push("/login");
      alert("ca marche");
    },
  },
};
</script>
<style>
.el-menu-demo {
  background-color: #c6e6ff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  position: absolute;
  bottom: 3rem;
  right: 0rem;
  width: 30%;
  display: flex;
  justify-content: center;
  z-index: 20;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #427fb9;
}
.top-bar {
  /* height: 10rem; */
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
}
</style>
