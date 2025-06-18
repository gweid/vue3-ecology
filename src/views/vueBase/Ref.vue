<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import RefComponent from '@/components/RefComponent.vue'


// vue3.5 之后的版本，可以使用 useTemplateRef
const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

onMounted(() => {
  console.log('inputRef: ', inputRef.value)
  inputRef.value?.focus()
})

// vue3.5 版本之前，声明一个 ref 来存放该元素的引用
const inputRef2 = ref<HTMLInputElement | null>(null)

onMounted(() => {
  console.log('inputRef2: ', inputRef2.value)
  // inputRef2.value?.focus()
})



// ----------------------------- 组件上的 ref
type RefComponentType = InstanceType<typeof RefComponent>
const refComponentRef = useTemplateRef<RefComponentType>('refComponentRef')

onMounted(() => {
  refComponentRef.value?.handleClick()
})

</script>

<template>
  <div class="ref">
    <input type="text" ref="inputRef">
    <input type="text" ref="inputRef2">

    <RefComponent ref="refComponentRef" />
  </div>
</template>

<style scoped>

</style>
