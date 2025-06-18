<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const info = reactive({
  list: [
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
  ]
})

// 计算属性相对于函数的好处：计算属性值会基于其响应式依赖被缓存
// 计算属性特点：计算属性仅会在其响应式依赖更新时才重新计算
// const now = computed(() => Date.now()) 这个计算属性永远不会更新，因为 Date.now() 并不是一个响应式依赖
const getFlag = computed(() => info.list.length)


const count = ref(0)

const countPlusOne = computed({
  get: () => count.value,
  set: (val) => {
    count.value = count.value + val
  }
})

const handleChangeCount = () => {
  // 这样，计算属性会被改写
  countPlusOne.value = 1
}

</script>

<template>
  <div>
    <h1>------------------------- 计算属性 -------------------------</h1>

    <div>
      <div>列表的长度：{{getFlag}}</div>
    </div>

    <div>------------------------- 可写的计算属性</div>

    <div>{{ countPlusOne}}</div>
    <button @click="handleChangeCount">改变count</button>
  </div>
</template>
