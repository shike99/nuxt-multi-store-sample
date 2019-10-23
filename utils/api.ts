import { Api } from '~/api'

export let $api: Api

export function initializeApi(api: Api) {
  $api = api
}
