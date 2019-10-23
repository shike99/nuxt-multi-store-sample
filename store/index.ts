import { ActionTree, Store } from 'vuex'
import { Context } from '@nuxt/types'
import { initializeStores } from '~/utils/storeAccessor'

const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
export * from '~/utils/storeAccessor'

export const state = () => ({})
export type RootState = ReturnType<typeof state>
export const getters = {}
export const mutations = {}
export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit(context, server: Context) {}
}
