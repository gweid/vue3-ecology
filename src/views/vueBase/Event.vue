<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const handleAdd = () => {
  count.value++
}

const handleClick = (type: 'add' | 'minus', value: number) => {
  type === 'add' ? count.value += value : count.value -= value
}

const handleEvent = (event: Event) => {
  console.log(event.target)
}

</script>

<template>
  <div class="wrapper">
    <h1>------------------------------------- 事件处理 -------------------------------------</h1>

    <div>{{ count }}</div>
    <el-button @click="count++">内联事件</el-button>
    <el-button @click="handleAdd">方法事件</el-button>
    <el-button @click="handleClick('minus', 2)">传参</el-button>
    <el-button @click="(event: Event) => handleEvent(event)">获取原生事件</el-button>

    <h1>------------------------------------- 事件修饰符 -------------------------------------</h1>

    <div @click.stop>阻止事件冒泡</div>
    <div @click.prevent>阻止默认行为</div>
    <div @click.stop.prevent>链式书写</div>
    <div @click.self>仅当事件源是自身时触发</div>
    <div @click.once>只触发一次</div>
    <div @click.capture>捕获阶段</div>

    <div @keyup.enter>回车</div>
    <div @keyup.esc>esc</div>
  </div>
</template>

<style scoped>

</style>
