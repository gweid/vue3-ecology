<script setup lang="ts">
import {
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

onBeforeUnmount(() => {
  console.log('Child: onBeforeUnmount')
})

onUnmounted(() => {
  console.log('Child: onUnmounted')
})

</script>

<template>
  <div class="life-cycle-child">
    <p>life-cycle-child</p>
  </div>
</template>

<style scoped>

</style>
