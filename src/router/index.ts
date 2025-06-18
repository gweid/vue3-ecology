import { createRouter, createWebHistory } from 'vue-router'
import VueBase from '../views/VueBase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vue-base',
      meta: {
        menu: {
          name: 'Vue3基础',
        },
      },
      component: VueBase,
    },
    {
      path: '/computed',
      name: 'computed',
      meta: {
        menu: {
          name: '计算属性',
        },
      },
      component: () => import('../views/Computed.vue'),
    },
    {
      path: '/class-style',
      name: 'class-style',
      meta: {
        menu: {
          name: 'class与style',
        },
      },
      component: () => import('../views/ClassStyle.vue'),
    },
    {
      path: '/if-for',
      name: 'if-for',
      meta: {
        menu: {
          name: '条件列表',
        },
      },
      component: () => import('../views/IfFor.vue'),
    },
    {
      path: '/event',
      name: 'event',
      meta: {
        menu: {
          name: '事件处理',
        },
      },
      component: () => import('../views/Event.vue'),
    },
    {
      path: '/v-model',
      name: 'v-model',
      meta: {
        menu: {
          name: '双向绑定',
        },
      },
      component: () => import('../views/VModel.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      meta: {
        menu: {
          name: '侦听器',
        },
      },
      component: () => import('../views/Watch.vue'),
    },
    {
      path: '/ref',
      name: 'ref',
      meta: {
        menu: {
          name: '模版引用',
        },
      },
      component: () => import('../views/Ref.vue'),
    },
    {
      path: '/component-base',
      name: 'component-base',
      meta: {
        menu: {
          name: '组件基础',
        },
      },
      component: () => import('../views/ComponentBase.vue'),
    },
    {
      path: '/life-cycle',
      name: 'life-cycle',
      meta: {
        menu: {
          name: '生命周期',
        },
      },
      component: () => import('../views/LifeCycle.vue'),
    },
    {
      path: '/component-deep',
      name: 'component-deep',
      meta: {
        menu: {
          name: '深入组件',
        },
      },
      component: () => import('../views/ComponentDeep.vue'),
    },
    {
      path: '/t-attributes',
      name: 't-attributes',
      meta: {
        menu: {
          name: '透传属性',
        },
      },
      component: () => import('../views/TAttributes.vue'),
    },
    {
      path: '/slots',
      name: 'slots',
      meta: {
        menu: {
          name: '插槽slots',
        },
      },
      component: () => import('../views/Slots.vue'),
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      meta: {
        menu: {
          name: '依赖注入',
        },
      },
      component: () => import('../views/ProvideInject.vue'),
    },
    {
      path: '/async-component',
      name: 'async-component',
      meta: {
        menu: {
          name: '异步组件',
        },
      },
      component: () => import('../views/AsyncComponent.vue'),
    },
    {
      path: '/composite-api',
      name: 'composite-api',
      meta: {
        menu: {
          name: '组合式API',
        },
      },
      component: () => import('../views/CompositeApi.vue'),
    },
    {
      path: '/custom-command',
      name: 'custom-command',
      meta: {
        menu: {
          name: '自定义指令',
        },
      },
      component: () => import('../views/CustomCommand.vue'),
    },
    {
      path: '/plugins',
      name: 'plugins',
      meta: {
        menu: {
          name: 'vue的插件',
        },
      },
      component: () => import('../views/Plugins.vue'),
    },
    {
      path: '/keep-alive',
      name: 'keep-alive',
      meta: {
        menu: {
          name: 'keepalive',
        },
      },
      component: () => import('../views/KeepAliveComp.vue'),
    },
    {
      path: '/teleport',
      name: 'teleport',
      meta: {
        menu: {
          name: 'teleport',
        },
      },
      component: () => import('../views/TeleportComp.vue'),
    },
    {
      path: '/suspense',
      name: 'suspense',
      meta: {
        menu: {
          name: 'suspense',
        },
      },
      component: () => import('../views/SuspenseComp.vue'),
    },
  ],
})

export default router
