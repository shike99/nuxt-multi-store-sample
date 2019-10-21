import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $injectContext(): string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $injectContext(): string
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $injectContext(): string
  }
}

const plugin: Plugin = (context, inject) => {
  const ctx = context.isServer ? context.req.url : context.route.fullPath
  inject('injectContext', () => ctx)
}

export default plugin
