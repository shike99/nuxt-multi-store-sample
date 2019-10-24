import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AdministratorStore from '~/utils/administratorStore'

export let administratorStore: AdministratorStore

export function initializeStores(store: Store<any>): void {
  administratorStore = getModule(AdministratorStore, store)
}
