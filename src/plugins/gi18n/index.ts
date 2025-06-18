import type { App } from 'vue'

export default {
  install: (app: App, options: Record<string, any>) => {
    // 全局注册一个 $gi18n 函数
    app.config.globalProperties.$gi18n = (key: string) => {
      const res = key.split('.')
      const langKey = res[0]
      const langVal = res[1]
      return options[langKey][langVal]
    }
  }
}
