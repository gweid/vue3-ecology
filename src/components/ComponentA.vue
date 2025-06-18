<script setup lang="ts">
import { ref } from 'vue'

// ------------------------------ props --------------------------------

const props = defineProps<{
  title?: string
  count?: number
  info?: {
    msg?: string
    count?: number
  }
}>()

// 像下面这样做就使 prop 和后续更新无关了
const subTitle = ref(props.title)



// ------------------------------ 事件 --------------------------------

const emit = defineEmits<{
  (e: 'add-click', num?: number): void
}>()

// 声明式触发事件
const handleAddClick = (num?: number) => {
  emit('add-click', num)
}

</script>

<template>
  <div class="wrapper">
    <div>局部注册组价</div>
    <div v-if="title">title: {{ title }}</div>
    <div v-if="count">count: {{ count }}</div>
    <div v-if="info?.msg">info.msg: {{ info?.msg }}</div>
    <div v-if="info?.count">info.count: {{ info?.count }}</div>
    <el-button v-if="count" @click="$emit('add-click')">count+</el-button>
    <el-button v-if="count" @click="$emit('add-click', 2)">count+2</el-button>
    <el-button v-if="count" @click="handleAddClick(5)">count+5</el-button>
  </div>
</template>
