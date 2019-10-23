import { Plugin } from '@nuxt/types'
import { ApiMock, ApiImpl } from '~/api'
import { initializeApi } from '~/utils/api'

const plugin: Plugin = (_) => {
  const api = process.env.NODE_ENV === 'test' ? new ApiMock() : new ApiImpl()
  initializeApi(api)
}

export default plugin
