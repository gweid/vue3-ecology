<script setup lang="ts">

</script>

<template>
  <div class="com-slot">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer v-if="$slots.footer">
      <slot name="footer">默认插槽内容</slot>
    </footer>
  </div>
</template>

<style scoped>

</style>
