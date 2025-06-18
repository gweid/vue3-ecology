<script setup lang="ts">
import { ref, onActivated, onDeactivated } from 'vue'

const radio = ref('1')

onActivated(() => {
  console.log('keep1 onActivated')
})

onDeactivated(() => {
  console.log('keep1 onDeactivated')
})

</script>

<template>
  <div class="wrapper">
    <div style="width: 300px; height: 100px ;border: solid 1px red;">
      <h1>----------------keep1---------------</h1>
      <el-radio-group v-model="radio">
        <el-radio value="1" size="large">Option 1</el-radio>
        <el-radio value="2" size="large">Option 2</el-radio>
        <el-radio value="3" size="large">Option 3</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
