import { Api } from './interface'

export class ApiImpl implements Api {
  persistCounter(counter: number): void {
    // localStorage.setItem('counter', counter.toString())
    console.log(`persisted!: ${counter}`)
  }
}
