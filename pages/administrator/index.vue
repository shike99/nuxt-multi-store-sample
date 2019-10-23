<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Counter" icon="counter">
        <div class="has-text-centered">
          {{ count }}
        </div>
        <b-button type="is-primary" @click="increment">
          Increment
        </b-button>
        <b-button type="is-primary" @click="decrement">
          Decrement
        </b-button>
        <b-button type="is-primary" outlined @click="persist">
          Persist
        </b-button>
      </card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { administratorStore } from '~/store'

@Component({
  components: {
    Card: () => import('@/components/Card.vue')
  },
  layout: 'administrator'
})
export default class Administrator extends Vue {
  get count (): number {
    return administratorStore.count
  }

  increment () {
    administratorStore.increment()
  }

  decrement () {
    administratorStore.decrement()
  }

  persist () {
    administratorStore.persistCounter()
  }
}
</script>
