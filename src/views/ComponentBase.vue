<script setup lang="ts">
import { ref, reactive } from 'vue'
import ComItem from '@/components/ComItem.vue'
import DynamicsA from '@/components/DynamicsA.vue'
import DynamicsB from '@/components/DynamicsB.vue'
import DynamicsC from '@/components/DynamicsC.vue'

interface Item {
  id: number
  name: string
}

const list = reactive<Item[]>([
  {
    id: 1,
    name: '张三'
  },
  {
    id: 2,
    name: '李四'
  },
  {
    id: 3,
    name: '王五'
  }
])

const handleClick = (item: Item, str: string) => {
  console.log('handleClick: ', item, str)
}



// ---------------------------- $emit
const handleOperateClick = (id: number) => {
  console.log('handleOperateClick: ', id);
}



// ---------------------------- 动态组件
const tabs = [
  { id: 1, com: DynamicsA, name: '组件A' },
  { id: 2, com: DynamicsB, name: '组件B' },
  { id: 3, com: DynamicsC, name: '组件C' }
]

const currentTab = ref(0)

</script>

<template>
  <div class="component-base">
    <ComItem v-for="item in list" :key="item.id" :id="item.id" :name="item.name"
      :handle-click="(str) => handleClick(item, str)" />

    <div> ---------------------------- $emit --------------------------------</div>

    <ComItem v-for="item in list" :key="item.id" :id="item.id" :name="item.name" @operate-click="handleOperateClick" />

    <div> ---------------------------- slot --------------------------------</div>

    <ComItem v-for="item in list" :key="item.id" :id="item.id" :name="item.name" @operate-click="handleOperateClick">
      <template #default>
        <span style="margin-left: 10px;">备注</span>
      </template>
    </ComItem>

    <div> ---------------------------- 动态组件 --------------------------------</div>

    <div>
      <el-button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :type="currentTab === index ? 'primary' : 'default'"
        @click="currentTab = index"
      >
        {{ tab.name }}
      </el-button>
      <component :is="tabs[currentTab].com" style="border: 1px solid red; width: 200px; margin-top: 10px;" />
    </div>

  </div>
</template>

<style scoped></style>
