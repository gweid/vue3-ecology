<script setup lang="ts">
const props = defineProps<{
  id: number
  name: string
}>()

</script>

<template>
  <div class="item">
    <span>{{ props.id}}</span>
    <span>---</span>
    <span>{{ props.name}}</span>
  </div>
</template>

<style scoped>
.item {
  margin: 16px 0;
}
</style>