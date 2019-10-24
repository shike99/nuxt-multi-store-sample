import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Administrator from '@/pages/administrator/index.vue'
import { initializeApi } from '~/utils/api'
import { initializeStores } from '~/utils/storeAccessor'
import { ApiMock } from '~/api'
import AdministratorStore, { name } from '~/utils/administratorStore'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
const store = new Vuex.Store({})
initializeApi(new ApiMock())
initializeStores(store)
store.registerModule(name, AdministratorStore)

describe('Administrator', () => {
  test('test', async () => {
    const wrapper = mount(Administrator, {
      localVue
    })
    await wrapper.vm.$nextTick()
    const persistButton = wrapper.findAll('button').at(2)
    persistButton.trigger('click')
  })
})
