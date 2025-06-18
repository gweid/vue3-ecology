<script setup lang="ts">
// 透传 Attributes
// “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器
// 最常见的例子就是 class、style 和 id
// 当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上

import { ref } from 'vue'
import ComponentAttributes from '@/components/ComponentAttributes.vue'
import ComponentManyRootAttributes from '@/components/ComponentManyRootAttributes.vue'

</script>

<template>
  <div class="wrapper">
    <ComponentAttributes class="t-attributes" style="color: red;" />

    <div>----------------------------------------</div>

    <!-- 多根节点属性透传 -->
    <ComponentManyRootAttributes class="t-attributes" style="color: red;" />
  </div>
</template>

<style scoped>

</style>
