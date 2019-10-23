import { Api } from '~/api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: Api
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: Api
  }
}

declare module 'vuex-module-decorators' {
  interface VuexModule {
    $api: Api
  }
}
