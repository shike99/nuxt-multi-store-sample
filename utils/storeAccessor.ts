import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AdministratorStore from '~/utils/administratorStore'

let administratorStore: AdministratorStore

function initializeStores(store: Store<any>): void {
  administratorStore = getModule(AdministratorStore, store)
}

export { initializeStores, administratorStore }
