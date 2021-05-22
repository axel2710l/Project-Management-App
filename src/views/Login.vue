<template>
  <div class="container">
    <div class="main">
      <base-card>
      
        <template #default>
          <h2>Login</h2>
          
          <div class="p-inputgroup input">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
            
          </div>
          <div class="p-inputgroup input">
            <span class="p-inputgroup-addon">
              <i class="pi pi-lock"></i>
            </span>
            <InputText placeholder="Username" />
          </div>
          <div >
              <Button class="input" label="Login" icon="pi pi-sign-in" iconPos="right" />
          </div>

        </template>
      </base-card>
    </div>

  </div>
</template>




<script>
import InputText from'primevue/inputtext'
import Button from 'primevue/button'
export default {
    components:{
        InputText,
        Button,
    }
}
</script>


<style scoped>
.main{
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
.input{
    width: 15rem;
    margin: 1rem 3rem 1rem 3rem;
   
    /* border-radius: 2rem; */
}
</style>


