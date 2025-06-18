import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 对象形式定义
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })


// 函数形式定义
export const useCounterStore = defineStore('counter', () => {
  // 这个相当于对象形式的 state
  const count = ref(0)

  // 这个相当于对象形式的 getters
  const doubleCount = computed(() => count.value * 2)

  // 传递参数
  const doubleCountParam = computed(() => {
    return (multiplier: number = 2) => count.value * multiplier
  })


  // 这个相当于对象形式的 actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, doubleCountParam, increment }
})
