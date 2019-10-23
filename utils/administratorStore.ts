import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { $api } from '~/utils/api'

export const name = 'administrator'

@Module({
  name,
  stateFactory: true,
  namespaced: true
})
export default class AdministratorStore extends VuexModule {
  counter: number = 0

  get count(): number {
    return this.counter
  }

  @Mutation
  increment() {
    this.counter += 1
  }

  @Mutation
  decrement() {
    this.counter -= 1
  }

  @Action
  persistCounter() {
    $api.persistCounter(this.counter)
  }
}
