<script setup lang="ts">
import { ref } from "vue"
import KeepAliveComp1 from '@/components/KeepAlive/KeepComp1.vue'
import KeepAliveComp2 from '@/components/KeepAlive/KeepComp2.vue'

const components = [KeepAliveComp1, KeepAliveComp2]

const activeComp = ref(0)

const handleClick = (val: number) => {
  activeComp.value = val
}
</script>

<template>
  <div class="wrapper">
    <el-button
      :type="activeComp === 0 ? 'primary' : 'default'"
      @click="() => handleClick(0)"
    >
      keep1
    </el-button>
    <el-button
      :type="activeComp === 1 ? 'primary' : 'default'"
      @click="() => handleClick(1)"
    >
      keep2
    </el-button>
    <KeepAlive>
      <component :is="components[activeComp]"/>
    </KeepAlive>
  </div>
</template>

<style scoped>

</style>
