<script setup lang="ts">
import { ref, computed } from 'vue'
import useFetch from '../../hooks/useFetch'

const currentPage = ref(1)

const handleCurrentChange = (page: number) => {
  currentPage.value = page
}

const baseUrl = 'https://jsonplaceholder.typicode.com/todos'
const fetchUrl = computed(() => `${baseUrl}/${currentPage.value}`)

const [data, error] = useFetch(fetchUrl)

</script>

<template>
  <div class="composite-api">
    <h1>-------------------------组合式api提取复用逻辑-------------------------</h1>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="40"
      @current-change="handleCurrentChange"
    />
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped>

</style>
