<script setup lang="ts">
import { ref, provide } from 'vue'
import ProvideInjectChild from '@/components/ProvideInject/ProvideInjectChild.vue'

const msg = ref('准备注入数据')

// 提供数据：第一个参数是提供的数据名，第二个参数是提供的数据值
provide('message', msg)


const handleChangeMsg = () => {
  msg.value = '注入数据完成'
}
</script>

<template>
  <div class="wrapper">
    <ProvideInjectChild />
    <div>
      <el-button @click="handleChangeMsg">注入</el-button>
    </div>
  </div>
</template>

<style scoped>

</style>
