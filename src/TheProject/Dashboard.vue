<template>
  <div class="controls">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">

        <template #title>
          <div class="control">
            <i class="el-icon-data-board"></i>
            <span>Projects</span>
          </div>
        </template>
        <el-menu-item-group title="Personnels">
          <el-menu-item index="1-1">Memoire</el-menu-item>
          <el-menu-item index="1-2">Restoration</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Entreprise">
          <el-menu-item index="1-3">Gestion de projets</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>Sur le terrain</template>
          <el-menu-item index="1-4-1">Fobre Optique</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">

        <div class="control">
          <i class="el-icon-s-finance"></i>
          <span>Budgetting</span>
        </div>

      </el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >
        <div class="control">
          <i class="el-icon-document"></i>
          <span>Resources</span>
        </div>
      </el-menu-item>
      <el-menu-item index="4" class="control">
        <div class="control">
          <i class="el-icon-setting"></i>
          <span>Settings</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>




<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.controls {
  width: 100%;
  display: flex;
  justify-content: center;
}
.control{
    float: center;
    /* background-color: rgb(232, 245, 255); */
    width: 18vw;
}
</style>
