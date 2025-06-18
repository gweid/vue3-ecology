<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const handleClick = (open: boolean) => {
  visible.value = open
}

</script>

<template>
  <el-button @click="() => handleClick(true)">open</el-button>
  <Teleport to="body">
    <div v-if="visible" class="teleport-wrapper">
      <h1>teleport</h1>
      <el-button @click="() => handleClick(false)">close</el-button>
    </div>
  </Teleport>
</template>

<style scoped>
.teleport-wrapper {
  width: 200px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
