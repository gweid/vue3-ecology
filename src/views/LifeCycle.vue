<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated,
  onRenderTracked,
  onRenderTriggered
} from 'vue'
import LifeCycleChild from '@/components/LifeCycleChild.vue'

// 在组件挂载前执行
onBeforeMount(() => {
  console.log('Parent: onBeforeMount')
})

// 在组件挂载完成后执行
onMounted(() => {
  console.log('Parent: onMounted')
})

// 在组件更新前执行
onBeforeUpdate(() => {
  console.log('Parent: onBeforeUpdate')
})

// 在组件更新完成后执行
onUpdated(() => {
  console.log('Parent: onUpdated')
})

// 在组件卸载前执行
onBeforeUnmount(() => {
  console.log('Parent: onBeforeUnmount')
})

// 在组件卸载完成后执行
onUnmounted(() => {
  console.log('Parent: onUnmounted')
})

// 组件实例是 <KeepAlive> 缓存树的一部分，在组件被激活时执行
onActivated(() => {
  console.log('Parent: onActivated')
})

// 组件实例是 <KeepAlive> 缓存树的一部分，在组件被卸载时执行
onDeactivated(() => {
  console.log('Parent: onDeactivated')
})


// 当组件渲染过程中追踪到响应式依赖时调用（只在开发环境有效）
onRenderTracked((e) => {
  console.log('Parent: onRenderTracked', e)
})

// 当响应式依赖的变更触发了组件渲染时调用（只在开发环境有效）
onRenderTriggered((e) => {
  console.log('Parent: onRenderTriggered', e)
})


// 捕获了后代组件传递的错误时调用
onErrorCaptured((err, instance, info) => {
  console.log('Parent: onErrorCaptured', err, instance, info)
})

const count = ref(0)

const isShow = ref(true)

</script>

<template>
  <div class="life-cycle">
    <p>count: {{ count}}</p>
    <el-button @click="count++">点击</el-button>

    <div>----------------------------------------------</div>

    <div>
      <LifeCycleChild v-if="isShow" />
      <el-button @click="isShow = !isShow">显示/隐藏</el-button>
    </div>
  </div>
</template>

<style scoped>

</style>
