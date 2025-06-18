<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import router from './router'

const routes = router.options.routes

const route = useRoute()

const currentPath = computed(() => route.path)

// 安全获取菜单名称的辅助函数
const getMenuName = (item: any) => {
  return item.meta?.menu?.name || item.name
}

</script>

<template>
  <div class="app-wrapper">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="198px" class="aside">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" class="el-menu-vertical"
            :default-active="currentPath" router>
            <template v-for="item in routes" :key="item.name">
              <el-sub-menu v-if="item.children?.length" :index="item.path">
                <template #title>
                  <span>Vue3基础</span>
                </template>
                <el-menu-item v-for="child in item.children" :key="child.name" :index="child.path" @click="currentPath = child.path">
                  <span>{{ getMenuName(child) }}</span>
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item.path" @click="currentPath = item.path">
                <span>{{ getMenuName(item) }}</span>
              </el-menu-item>
            </template>
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
  overflow: hidden;
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
  height: calc(100vh - 60px); /* 减去header高度 */
  overflow-y: auto; /* 直接在aside上启用滚动 */
  overflow-x: hidden;
}

.aside::-webkit-scrollbar {
  width: 4px;
}

.el-menu-vertical {
  width: 100%;
  border-right: none;
}

:deep(.el-main) {
  height: calc(100vh - 60px);
  overflow-y: auto;
  padding: 20px;
}
</style>
