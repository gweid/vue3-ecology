import { createRouter, createWebHistory } from 'vue-router'
import VueBase from '../views/vueBase/VueBase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vue3',
      meta: {
        menu: {
          name: 'Vue3基础',
        },
      },
      component: VueBase,
      children: [
        {
          path: '/vue-base',
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
          component: () => import('../views/vueBase/Computed.vue'),
        },
        {
          path: '/class-style',
          name: 'class-style',
          meta: {
            menu: {
              name: 'class与style',
            },
          },
          component: () => import('../views/vueBase/ClassStyle.vue'),
        },
        {
          path: '/if-for',
          name: 'if-for',
          meta: {
            menu: {
              name: '条件列表',
            },
          },
          component: () => import('../views/vueBase/IfFor.vue'),
        },
        {
          path: '/event',
          name: 'event',
          meta: {
            menu: {
              name: '事件处理',
            },
          },
          component: () => import('../views/vueBase/Event.vue'),
        },
        {
          path: '/v-model',
          name: 'v-model',
          meta: {
            menu: {
              name: '双向绑定',
            },
          },
          component: () => import('../views/vueBase/VModel.vue'),
        },
        {
          path: '/watch',
          name: 'watch',
          meta: {
            menu: {
              name: '侦听器',
            },
          },
          component: () => import('../views/vueBase/Watch.vue'),
        },
        {
          path: '/ref',
          name: 'ref',
          meta: {
            menu: {
              name: '模版引用',
            },
          },
          component: () => import('../views/vueBase/Ref.vue'),
        },
        {
          path: '/component-base',
          name: 'component-base',
          meta: {
            menu: {
              name: '组件基础',
            },
          },
          component: () => import('../views/vueBase/ComponentBase.vue'),
        },
        {
          path: '/life-cycle',
          name: 'life-cycle',
          meta: {
            menu: {
              name: '生命周期',
            },
          },
          component: () => import('../views/vueBase/LifeCycle.vue'),
        },
        {
          path: '/component-deep',
          name: 'component-deep',
          meta: {
            menu: {
              name: '深入组件',
            },
          },
          component: () => import('../views/vueBase/ComponentDeep.vue'),
        },
        {
          path: '/t-attributes',
          name: 't-attributes',
          meta: {
            menu: {
              name: '透传属性',
            },
          },
          component: () => import('../views/vueBase/TAttributes.vue'),
        },
        {
          path: '/slots',
          name: 'slots',
          meta: {
            menu: {
              name: '插槽slots',
            },
          },
          component: () => import('../views/vueBase/Slots.vue'),
        },
        {
          path: '/provide-inject',
          name: 'provide-inject',
          meta: {
            menu: {
              name: '依赖注入',
            },
          },
          component: () => import('../views/vueBase/ProvideInject.vue'),
        },
        {
          path: '/async-component',
          name: 'async-component',
          meta: {
            menu: {
              name: '异步组件',
            },
          },
          component: () => import('../views/vueBase/AsyncComponent.vue'),
        },
        {
          path: '/composite-api',
          name: 'composite-api',
          meta: {
            menu: {
              name: '组合式API',
            },
          },
          component: () => import('../views/vueBase/CompositeApi.vue'),
        },
        {
          path: '/custom-command',
          name: 'custom-command',
          meta: {
            menu: {
              name: '自定义指令',
            },
          },
          component: () => import('../views/vueBase/CustomCommand.vue'),
        },
        {
          path: '/plugins',
          name: 'plugins',
          meta: {
            menu: {
              name: 'vue的插件',
            },
          },
          component: () => import('../views/vueBase/Plugins.vue'),
        },
        {
          path: '/keep-alive',
          name: 'keep-alive',
          meta: {
            menu: {
              name: 'keepalive',
            },
          },
          component: () => import('../views/vueBase/KeepAliveComp.vue'),
        },
        {
          path: '/teleport',
          name: 'teleport',
          meta: {
            menu: {
              name: 'teleport',
            },
          },
          component: () => import('../views/vueBase/TeleportComp.vue'),
        },
        {
          path: '/suspense',
          name: 'suspense',
          meta: {
            menu: {
              name: 'suspense',
            },
          },
          component: () => import('../views/vueBase/SuspenseComp.vue'),
        },
      ]
    },
    {
      path: '/pinia',
      name: 'pinia',
      meta: {
        menu: {
          name: 'Pinia使用',
        },
      },
      component: () => import('../views/pinia/pinia.vue'),
    },
  ],
})

export default router
