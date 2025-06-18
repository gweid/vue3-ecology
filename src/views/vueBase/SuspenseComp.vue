<script setup lang="ts">
import { defineAsyncComponent, h } from 'vue'

// 异步组件
const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('@/components/ComponentAsync.vue') as any)
    }, 1000)
  })
})
</script>

<template>
  <div class="wrapper">
    <Suspense>
      <template #default>
        <AsyncComp />
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>
