<template>
  <div>
    <Avatar
      image="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/zinedine-zidane/6084284-8-fre-FR/Zinedine-Zidane.jpg"
      class="p-mr-2 avatar"
      size="xlarge"
      shape="circle"
    />
    
    <h2 class="user-name">User Name</h2>
   
   
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
// import CascadeSelect from "primevue/cascadeselect";
export default {
  components: {
    Avatar,
    // CascadeSelect,
  },
  
};
</script>

<style scoped>
.avatar {
  float: left;
  margin: 1rem;
}
.user-select {
  position: absolute;
  bottom: 0;
  right: 0;
  /* width: 0px; */
  border: none;
}
.user-name{
    position: absolute;
    bottom: 0;
    margin: 1rem;
}

</style>