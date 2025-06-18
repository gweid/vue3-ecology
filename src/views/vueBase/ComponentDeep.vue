<script setup lang="ts">
import { ref } from 'vue'
import ComponentA from '@/components/ComponentA.vue'
import ComponentVModel from '@/components/ComponentVModel.vue'
import ComponentVModelModifier from '@/components/ComponentVModelModifier.vue'


const count = ref(1)

const handleAddClick = (num?: number) => {
  count.value += num || 1
}



const countModel = ref(1)
const firstNameModel = ref('li')
const lastNameModel = ref('si')

const msgModel = ref('hello')

</script>

<template>
  <div class="component-deep">
    <div>--------------------------------组件注册--------------------------------</div>

    <div>
      <!-- 局部注册组件 -->
      <ComponentA />
      <!-- 全局注册组件 -->
      <ComponentB />
    </div>

    <div>--------------------------------props--------------------------------</div>

    <div>
      <ComponentA title="标题" />
      <ComponentA :title="`动态prop---${count}`" />
    </div>

    <div>--------------------------------事件--------------------------------</div>

    <div>
      <ComponentA :count="count" @add-click="(num) => handleAddClick(num)" />
    </div>

    <div>--------------------------------组件v-model--------------------------------</div>

    <div>
      <ComponentVModel v-model="countModel" />

      <!-- 指定参数名的形式，可以设置多个 v-model -->
      <ComponentVModel
        v-model:firstName="firstNameModel"
        v-model:lastName="lastNameModel"
      />

      <!-- v-model 修饰符：内置修饰符 -->
      <ComponentVModel v-model.number="countModel" />
      <!-- v-model 修饰符：自定义修饰符 -->
      <ComponentVModelModifier v-model.capitalize="msgModel" />
    </div>
  </div>
</template>

<style scoped>

</style>
