<script setup lang="ts">
import { inject } from 'vue'

const msg = inject('message', '默认数据')
</script>

<template>
  <div class="wrapper">
    <p>注入的数据：{{ msg }}</p>
  </div>
</template>

<style scoped>

</style>
