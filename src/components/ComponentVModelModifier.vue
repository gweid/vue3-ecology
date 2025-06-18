<script setup lang="ts">
const [model, modifiers] = defineModel({
  get(value: string) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
</script>

<template>
  <div class="wrapper" style="width: 300px;">
    <el-input type="text" v-model="model" />
  </div>
</template>
