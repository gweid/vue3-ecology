<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ComponentAsync = defineAsyncComponent(() => (
  import('@/components/ComponentAsync.vue')
))
</script>

<template>
  <div class="async-com">
    <ComponentAsync />
  </div>
</template>

<style scoped>

</style>
