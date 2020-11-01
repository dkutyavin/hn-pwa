import { fetcher } from './core'
import { ENDPOINTS } from './endpoints'

export async function getTopPage() {
  let itemIds: ID[] = await fetcher(ENDPOINTS.TOP())
  let items = await getItems(itemIds)

  return items
}

function getItems(itemIDs: ID[]) {
  const AMOUNT = 10 // todo - add pagination

  let currentPageIDS = itemIDs.slice(0, AMOUNT)
  let fetchers = currentPageIDS.map(getItemById)

  return Promise.all<Item>(fetchers)
}

function getItemById(id: ID) {
  return fetcher(ENDPOINTS.ITEM(id))
}

interface Item {
  id: string
}

type ID = string
