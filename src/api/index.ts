import { ID, Item } from '../interfaces/HackerNewsAPI'
import { fetcher } from './core'
import { ENDPOINTS } from './endpoints'

export function getTopPageIDs() {
  return fetcher<ID[]>(ENDPOINTS.TOP())
}

export function getBestPageIDs() {
  return fetcher<ID[]>(ENDPOINTS.BEST())
}

export function getNewPageIDs() {
  return fetcher<ID[]>(ENDPOINTS.NEW())
}

export function getItems(itemIDs: ID[]) {
  return Promise.all(itemIDs.map(getItemById))
}

export function getItemById(id: ID) {
  return fetcher<Item>(ENDPOINTS.ITEM(id))
}
