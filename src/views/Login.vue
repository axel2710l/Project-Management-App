<template>
  <div class="container">
    <div id="Signin">
      <Button
              label="Sign In"
              icon="pi pi-sign-in"
              iconPos="right"
              @click="goToSignin"
            />
  </div>
    <div class="main">
      <base-card>

        <div class="demo-input-suffix">
          <h2>Login</h2> <br>
          <div class="input">
            <el-input
              placeholder="Username"
              prefix-icon="el-icon-user-solid"
              v-model="input1"
            >
            </el-input>
          </div>
          <div class="input">
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="Password"
              v-model="input2"
              show-password
            ></el-input>
          </div>
          <div>
            <!-- <el-button class="input" type="primary">Login<i class="el-icon-login el-icon-right"></i></el-button> -->
            <Button
              class="input"
              label="Login"
              icon="pi pi-sign-in"
              iconPos="right"
            />
          </div>
        </div>
      </base-card>
    </div>

  </div>
</template>




<script>
// import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
  components: {
    // InputText,
    Button,
  },
  data() {
    return {
      input1: null,
      input2: null,
      showPassword: false,
    };
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    goToSignin() {
      console.log('SIGNIN')
      this.$router.push('/signin');
    }
  },
};
</script>


<style scoped>
.main {
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  /* margin: 5rem; */
}
.container {
  /* position: absolute; */
  width: 100%;
  height: 100vh;
  left: -1896px;
  top: -1300px;

  overflow: hidden;
  margin: 0;
  background-image: url("../assets/13105.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
#Signin{
  float: right;
  margin: 1rem;
}
.input {
  width: 15rem;
  margin: 1rem 3rem 1rem 3rem;

  /* border-radius: 2rem; */
}
</style>


