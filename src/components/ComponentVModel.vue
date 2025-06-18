<script setup lang="ts">
// vue 3.4 开始推荐使用 defineModel
// defineModel() 返回的值是一个 ref
// 它可以像其他 ref 一样被访问以及修改，不过它能起到在父组件和当前变量之间的双向绑定的作用
//  - 它的 .value 和父组件 v-model 的值同步
//  - 父组件 v-model 的值变化时，当前组件的 .value 也会变化
//  - 当它被子组件变更了，会触发父组件绑定的值一起更新
const model = defineModel<number>({ default: 0 })
const firstName = defineModel<string>('firstName')
const lastName = defineModel<string>('lastName')

const handleModelAdd = () => {
  model.value++
}

</script>

<template>
  <div class="component-v-model">
    <div v-if="model">
      <p>{{ model }}</p>
      <el-button @click="handleModelAdd">model++</el-button>
    </div>

    <div>----------------------------------</div>

    <div v-if="firstName && lastName" style="width: 300px;">
      <el-input v-model="firstName"></el-input>
      <el-input v-model="lastName"></el-input>
    </div>
  </div>
</template>
