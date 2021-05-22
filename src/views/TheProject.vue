<template>

  <div id="container">
    <div id="header">
      <h2>Project Name  </h2>
    </div>
    <div id="main">

    </div>
    <div id="sidebar">
      <div id="user">
        <User />

      </div>
      <div id="dashboard controls">
        <Dashboard class="controls" />
      </div>
    </div>

  </div>
</template>





<script>
import Dashboard from "../TheProject/Dashboard.vue";
import User from "../TheProject/User.vue";

export default {
  components: {
    Dashboard,
    User,
  },
};
</script>


<style scoped>
#container {
  background-color: rgb(232, 245, 255);

  width: 100vw;
  height: 100vh;
}
#header {
  position: absolute;
  right: 0;
  top: 0;
  width: 75%;
  height: 15vh;
  border-radius: 0 0 1rem 1rem;
  text-align: left;
  background-color: white;
  box-shadow: 4px 4px 4px  rgba(0, 0, 0, 0.26);
  padding: 1.3rem;
}
#main {
  position: absolute;
  right: 0;
  bottom: -5%;
  width: 75%;
  height: 82vh;
  border-radius:  1rem 1rem 0 0;

  background-color: white;
  box-shadow: 4px 4px 4px 4px  rgba(0, 0, 0, 0.26);
  padding: 1.3rem;
}
#sidebar {
  position: relative;
  width: 22%;
  height: 100vh;
  background-color: white;
  float: left;
}
#user {
  position: relative;
  width: 100%;
  height: 25vh;
  border-radius: 0 0 1rem 1rem;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.26);
  z-index: 15;
}
#dashboard {
  position: absolute;

  background-color: white;
  height: 100%;
  width: 100%;
  z-index: 10;
}
.controls {
  position: absolute;
  top: 30vh;
}
</style>


