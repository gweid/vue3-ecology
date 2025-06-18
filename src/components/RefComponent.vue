<script setup lang="ts">
const handleClick = () => {
  console.log('ref子组件组件click');
}

// 暴露给父组件
defineExpose({
  handleClick
})
</script>

<template>
  <div class="ref-component">
    <h1>ref子组件组件</h1>
    <el-button @click="handleClick">ref子组件组件click</el-button>
  </div>
</template>
