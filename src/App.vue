<script setup lang="ts">
import router from './router'

const routes = router.options.routes

</script>

<template>
  <div class="app-wrapper">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="198px" class="aside">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            class="el-menu-vertical"
            default-active="/"
            router
          >
            <el-menu-item v-for="item in routes" :key="item.name" :index="item.path">
              <span>Vue3基础</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100vh;
}

.header {
  width: 100%;
  background-color: #555c64;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.aside {
  background-color: #555c64;
  color: #fff;
}

.el-menu-vertical {
  width: 101%;
  height: 100vh;
}
</style>
