<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Item from '@/components/Item.vue'

const isIf = ref(true)
const isShow = ref(true)


const list = reactive([
  {
    id: 1,
    name: '张三',
  },
  {
    id: 2,
    name: '李四',
  },
  {
    id: 3,
    name: '王五',
  },
])

const obj = reactive({
  name: '张三',
  age: 18,
  gender: '男',
})


const filterList = computed(() => list.filter(item => item.id > 1))

</script>

<template>
  <div class="wrapper">
    <h1>------------------------------------- 条件 -------------------------------------</h1>

    <div v-if="isIf">v-if</div>
    <div v-else="isIf === false">v-else</div>
    <template v-if="isIf">
      <div>lalalal</div>
      <p>wenjian</p>
      <h1>slsllsls</h1>
    </template>

    <el-button @click="isIf = !isIf">v-if显隐</el-button>

    <div>--------------------------------------------------</div>

    <div v-show="isShow">v-show</div>
    <el-button @click="isShow = !isShow">v-show显隐</el-button>


    <h1>------------------------------------- 列表 -------------------------------------</h1>

    <div v-for="item in list" :key="item.id">
      <span>{{ item.id }}</span>
      <span>---</span>
      <span>{{ item.name }}</span>
    </div>

    <div>--------------------------------------------------</div>

    <template v-for="item in list" :key="item.id">
      <span>{{ item.id }}</span>
      <span>---</span>
      <span>{{ item.name }}</span>
    </template>

    <div>--------------------------------------------------</div>

    <Item
      v-for="item in list" :key="item.id"
      :id="item.id"
      :name="item.name"
    />

    <div>--------------------------------------------------</div>

    <div v-for="(value, key) in obj" :key="key">
      {{ key }} : {{ value }}
    </div>
  </div>

  <h1>------------------------------------- 条件与列表同级 -------------------------------------</h1>

  <template v-for="item in list" :key="item.id">
    <div v-if="item.id !== 1">
      <span>{{ item.id }}</span>
      <span>---</span>
      <span>{{ item.name }}</span>
    </div>
  </template>

  <h1>------------------------------------- 列表结合计算属性 -------------------------------------</h1>
  <Item v-for="item in filterList" :key="item.id" :id="item.id" :name="item.name" />
</template>

<style scoped>

</style>
