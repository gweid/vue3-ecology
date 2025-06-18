import { ref, watchEffect, toValue, type ComputedRef } from 'vue'

const useFetch = (url: string | ComputedRef<string>) => {
  const data = ref(null)
  const error = ref(null)

  const fetchData = async () => {
    data.value = null
    error.value = null

    // toValue(url) 是在 watchEffect 回调函数的内部调用的
    // 这确保了在 toValue() 规范化期间访问的任何响应式依赖项都会被侦听器跟踪
    try {
      const res = await fetch(toValue(url))
      const json = await res.json()
      data.value = json
    } catch (err: any) {
      error.value = err
    }
  }

  watchEffect(() => {
    fetchData()
  })

  return [data, error]
}

export default useFetch
