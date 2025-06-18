<script setup lang="ts">
defineOptions({
  inheritAttrs: true, // 是否开启透传属性，默认开启
})

</script>

<template>
  <div class="wrapper"></div>
  <div>其它节点</div>
  <p v-bind="$attrs">多跟节点透传属性</p>
</template>
