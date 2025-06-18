<script setup lang="ts">
// 自定义指令
// ! 重要：自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑

import { type DirectiveBinding } from "vue"

// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以当作自定义指令使用
const vColorred = {
  mounted(el: HTMLElement) {
    el.style.color = 'red'
  }
}



// -------------------------- 自定义指令的钩子 --------------------------
// const myDirective = {
//   // 在绑定元素的 attribute 前
//   // 或事件监听器应用前调用
//   created(el, binding, vnode) {
//     // 下面会介绍各个参数的细节
//   },
//   // 在元素被插入到 DOM 前调用
//   beforeMount(el, binding, vnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都挂载完成后调用
//   mounted(el, binding, vnode) {},
//   // 绑定元素的父组件更新前调用
//   beforeUpdate(el, binding, vnode, prevVnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都更新后调用
//   updated(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件卸载前调用
//   beforeUnmount(el, binding, vnode) {},
//   // 绑定元素的父组件卸载后调用
//   unmounted(el, binding, vnode) {}
// }



// -------------------------- 自定义指令的钩子的参数 --------------------------
const vClassname = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // binding 的值
    //   - value：传递给指令的值。例如在 v-directive="2" 中，值是 2
    //   - oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用
    //   - arg：传递给指令的参数 (如果有的话)。例如在 v-directive:foo 中，参数是 "foo"
    //   - modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo，修饰符对象是 { foo: true }
    el.classList.add(binding.value)
  }
}
</script>

<template>
  <div class="wrapper">
    <p v-colorred>自定义指令</p>
    <p v-highcolor>全局注册的自定义指令</p>
    <p v-classname="'cunstom'">自定义指令的钩子参数</p>
  </div>
</template>

<style scoped></style>
