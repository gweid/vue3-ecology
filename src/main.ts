import './assets/main.css'
import ComponentB from './components/ComponentB.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import gi18n from './plugins/gi18n'
import zh from './plugins/gi18n/lang/zh'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(gi18n, {
  zh: { ...zh },
})

app.component('ComponentB', ComponentB)

// 自定义指令全局注册
app.directive('highcolor', {
  mounted(el: HTMLElement) {
    el.style.color = 'green'
  }
})

app.mount('#app')
