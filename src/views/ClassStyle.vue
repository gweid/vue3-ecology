<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import ClassComponent from '@/components/ClassComponent.vue'

const isActive = ref(true)
const isShow = ref(false)

const classObj = reactive({
  active: true,
  show: false,
})

const classObj2 = computed(() => {
  return {
    active: isActive.value ? 'active' : '',
    show: isShow.value ? 'show' : '',
  }
})


const activeColor = ref('red')
const fontSize = ref('20')

const styleObj = reactive({
  color: activeColor.value,
  fontSize: `${fontSize.value}px`,
})

</script>

<template>
  <div>
    <h1>------------------------- class与style -------------------------</h1>

    <div>
      <div :class="{ active: isActive, show: isShow }">class</div>
      <div class="box" :class="{ active: isActive }">class 与 :calss 共存</div>
      <div :class="classObj">class是对象</div>
      <div :class="classObj2">class是计算属性</div>
      <div :class="[!isActive ? 'active' : '', !isShow ? 'show' : '']">计算属性绑定数组</div>
      <ClassComponent :class="classObj2" />
    </div>

    <div>------------------------- style -------------------------</div>

    <div :style="{ color: activeColor, fontSize: `${fontSize}px` }">内联样式style</div>
    <div :style="styleObj">style绑定一个对象</div>
    <div :style="[styleObj, { 'font-weight': '700' }]">style绑定数组</div>
  </div>
</template>
