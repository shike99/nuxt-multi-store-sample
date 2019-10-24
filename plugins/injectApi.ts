import { Plugin } from '@nuxt/types'
import { ApiImpl } from '~/api'
import { initializeApi } from '~/utils/api'

const plugin: Plugin = (_) => {
  const api = new ApiImpl()
  initializeApi(api)
}

export default plugin
