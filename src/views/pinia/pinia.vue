<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

// 响应式属性解构，需要使用 storeToRefs
const { count, doubleCount, doubleCountParam } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<template>
  <div class="pinia-wrapper">
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>doubleCountParams: {{ doubleCountParam(3) }}</p>

    <el-button @click="increment">加加</el-button>
  </div>
</template>
