import { Store, ActionTree } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AdministratorStore from '~/utils/administratorStore'

interface RootState {}

export const state = () => ({})

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit(context: any, server: any) {
    server.store.registerModule(
      'administrator',
      getModule(AdministratorStore, context)
    )
    if (this.$injectContext().startsWith('/administrator')) {
    }
  }
}
