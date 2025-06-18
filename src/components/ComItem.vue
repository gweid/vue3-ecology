<script setup lang="ts">
const props = defineProps<{
  id: number
  name: string
  handleClick?: (str: string) => void
}>()

// defineEmits<{
//   (e: 'enlarge-text', id: number): void
// }>()

// vue 3.3 版本之后可用，更加简洁
defineEmits<{
  'operate-click': [id: number]
}>()


const handleChildClick = () => {
  props.handleClick?.('child')
}

</script>

<template>
  <div class="item" @click="handleChildClick">
    <span>{{ props.id}}</span>
    <span>---</span>
    <span>{{ props.name}}</span>
    <el-button
      style="margin-left: 10px;"
      @click.stop="$emit('operate-click', props.id)"
    >
      操作
    </el-button>

    <slot />
  </div>
</template>

<style scoped>
.item {
  margin: 16px 0;
}
</style>
