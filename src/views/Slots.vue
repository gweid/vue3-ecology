<script setup lang="ts">
import { ref } from 'vue'
import ComponentSlot from '@/components/ComponentSlot.vue'
import ComponentSlot2 from '@/components/ComponentSlot2.vue'
import ComponentSlot3 from '@/components/ComponentSlot3.vue'

const slotContent = ref('插槽访问父组件数据')

</script>

<template>
  <div class="slots">
    <div>--------------------------------插槽基本使用--------------------------------</div>
    <ComponentSlot>
      <div>插槽内容1</div>
      <div>插槽内容2</div>
      <div>{{ slotContent }}</div>
    </ComponentSlot>

    <div>--------------------------------插槽默认内容--------------------------------</div>

    <ComponentSlot />

    <div>--------------------------------具名插槽--------------------------------</div>

    <ComponentSlot2>
      <!-- #header 是 v-slot:header 的缩写 -->
      <template #header>
        <div>具名插槽---头部</div>
      </template>
      <template #main>
        <div>具名插槽---内容</div>
      </template>
      <template #footer>
        <div>具名插槽---脚部</div>
      </template>
    </ComponentSlot2>

    <div>--------------------------------条件插槽--------------------------------</div>
    <ComponentSlot2>
      <!-- #header 是 v-slot:header 的缩写 -->
      <template #header>
        <div>具名插槽---头部</div>
      </template>
      <template #main>
        <div>具名插槽---内容</div>
      </template>
    </ComponentSlot2>


    <div>--------------------------------作用域插槽--------------------------------</div>
    <!-- 一般情况下，插槽的内容无法访问到子组件的状态 -->
    <!-- 但是可以像对组件传递 props 那样，向一个插槽的出口上传递属性 -->
    <ComponentSlot3>
      <template #default="slotProps">
        <div>{{ slotProps.message }}</div>
      </template>
    </ComponentSlot3>
  </div>
</template>

<style scoped>

</style>
