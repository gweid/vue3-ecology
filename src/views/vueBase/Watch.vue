<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue'

const msg = ref('')
const msg2 = ref('')

// 侦听单个数据
watch(msg, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

// 侦听多个数据
watch([msg, msg2], ([newMsg, newMsg2], [oldMsg, oldMsg2]) => {
  console.log(newMsg, newMsg2, oldMsg, oldMsg2)
})


// 不能直接侦听响应式对象的属性值，要使用 getter 函数
const obj = reactive({
  count: 0
})

// 错误的
// watch(obj.count, () => {})

watch(() => obj.count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})



// 侦听深层属性
const info = reactive({
  name: '张三',
  age: 18,
  address: {
    city: '北京',
  }
})

// 直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器
// 该回调函数在所有嵌套的变更时都会被触发
watch(info, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

// 只有在返回不同的对象时，才会触发回调
// 仅当 info.address 被替换时触发，如果修改 info.address.city，不会触发
watch(() => info.address, (newVal, oldVal) => {
  console.log('getter: ', newVal, oldVal)
})

// 可以加 deep 强制转成深层侦听器
watch(
  () => info.address,
  (newVal, oldVal) => {
    console.log('deep: ', newVal, oldVal)
  },
  { deep: true }
)


// watch 默认是懒执行的：仅当数据源变化时，才会执行回调
// 但在某些场景中，我们希望在创建侦听器时，立即执行一遍回调
// 此时可以使用 immediate
watch(
  info,
  (newVal, oldVal) => {
    console.log('immediate: ', newVal, oldVal)
  },
  { immediate: true }
)


// 一次性侦听
watch(
  info,
  (newVal, oldVal) => {
    console.log('once: ', newVal, oldVal)
  },
  { once: true }
)



// watchEffect 自动跟踪依赖
const first = ref('li')
const last = ref('si')
const full = ref('')

// watchEffect 会自动跟踪里面用到的依赖
// watchEffect 会立即执行一遍回调，然后当依赖的响应式数据发生变化时，会再次执行回调
watchEffect(() => full.value = `${first.value} ${last.value}`)



// 副作用清理
watch(first, (newVal, oldVal, onCleanup) => {
  console.log('watch first')

  // 清理逻辑
  onCleanup(() => {

  })
})

watchEffect((onCleanup) => {

  // 清理逻辑
  onCleanup(() => {

  })
})



// 回调的触发时机
// 当更改了响应式状态，它可能会同时触发 Vue 组件更新和侦听器回调
// 类似于组件更新，用户创建的侦听器回调函数也会被批量处理以避免重复调用
// 例如，如果我们同步将一千个项目推入被侦听的数组中，我们可能不希望侦听器触发一千次
// 默认情况下，侦听器回调会在父组件更新 (如有) 之后、所属组件的 DOM 更新之前被调用
// 这意味着如果你尝试在侦听器回调中访问所属组件的 DOM，那么 DOM 将处于更新前的状态


const source = ref('1')

// 如果想在侦听器回调中能访问被 Vue 更新之后的所属组件的 DOM，你需要指明 flush: 'post' 选项：

watch(
  source,
  () => {},
  { flush: 'post' }
)

watchEffect(
  () => {},
  { flush: 'post' }
)


// 同步侦听器：同步触发的侦听器，它会在 Vue 进行任何更新之前触发
watch(
  source,
  () => {},
  { flush: 'sync' }
)

watchEffect(
  () => {},
  { flush: 'sync' }
)



</script>

<template>
  <div class="watch">
    <div>
      <el-input v-model.lazy="msg" placeholder="请输入内容"></el-input>
      <el-input v-model.lazy="msg2" placeholder="请输入内容"></el-input>
    </div>

    <div>-------------------------------------------</div>

    <div>
      <el-button @click="obj.count++">侦听响应式属性</el-button>
    </div>

    <div>-------------------------------------------</div>

    <div>
      <el-button @click="info.address.city = '上海'">侦听深层属性</el-button>
      <el-button @click="info.address.city = '广州'">测试once</el-button>
      <el-button @click="info.name = '李四'">侦听浅层属性</el-button>
    </div>

    <div>-------------------------------------------</div>

    <div>
      <p>{{ full }}</p>
      <el-button @click="first = 'zhang'">first change</el-button>
      <el-button @click="last = 'san'">last change</el-button>
    </div>

  </div>
</template>

<style scoped>
.watch {
  width: 500px;
}
</style>
