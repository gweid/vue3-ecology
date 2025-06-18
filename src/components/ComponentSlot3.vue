<script setup lang="ts">
import { ref } from 'vue'

const message = ref('作用域插槽')

</script>

<template>
  <div class="com-slot">
    <slot :message="message"></slot>
  </div>
</template>

<style scoped>

</style>
