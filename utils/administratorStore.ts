import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'administrator',
  stateFactory: true,
  namespaced: true
})
export default class Administrator extends VuexModule {
  counter = 0

  get count(): number {
    return this.counter
  }

  @Mutation
  increase(count: number) {
    this.counter += count
  }

  @Mutation
  descrease(count: number) {
    this.counter -= count
  }
}
