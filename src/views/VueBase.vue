<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'

const count = ref(0)
const handleAdd = async () => {
  count.value++

  await nextTick()
  // 在 nextTick 后，可以获取到更新后的 DOM
}

const showName = ref(false)
const handleShowName = () => {
  showName.value = !showName.value
}

interface UserInfo {
  name: string
  age: number
}

const userInfo: UserInfo = reactive<UserInfo>({
  name: '张三',
  age: 18,
})

type UserKey = keyof UserInfo

const handleChangeUserInfo = <K extends UserKey>(key: K, value: UserInfo[K]) => {
  userInfo[key] = value
}

</script>

<template>
  <div>
    <h1>------------------------- vue3 基础 -------------------------</h1>

    <div>
      <p>{{ count }}</p>
      <el-button @click="handleAdd">加+</el-button>
    </div>

    <div>-------------------------------------------</div>

    <div>
      <p v-if="showName">名称</p>
      <el-button @click="handleShowName">{{ showName ? '隐藏' : '显示' }}</el-button>
    </div>

    <div>-------------------------------------------</div>

    <div>
      <p>{{ userInfo.name }}</p>
      <p>{{ userInfo.age }}</p>
      <el-button @click="handleChangeUserInfo('name', '李四')">修改名称</el-button>
      <el-button @click="handleChangeUserInfo('age', 20)">修改年龄</el-button>
    </div>
  </div>
</template>