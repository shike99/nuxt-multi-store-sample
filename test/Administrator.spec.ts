import { mount } from '@vue/test-utils'
import Administrator from '@/pages/administrator/index.vue'

describe('Administrator', async () => {
  test('test', () => {
    const wrapper = mount(Administrator)
    const persistButton = wrapper.findAll('button').at(2)
    persistButton.trigger('click')
  })
})
