import { Api } from './interface'

export class ApiMock implements Api {
  persistCounter(counter: number): void {
    console.log(`persisted!: ${counter} (mock)`)
  }
}
