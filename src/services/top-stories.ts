import { ID } from '../interfaces/HackerNewsAPI'
import { getTopPageIDs, getItems } from '../api'

let storiesIds: ID[]

export async function getTopStories(page = 0) {
  const AMOUNT = 20

  if (!storiesIds) {
    // save current page
    storiesIds = await getTopPageIDs()
  }

  const start = page * AMOUNT
  const end = (page + 1) * AMOUNT

  const currentPageIDs = storiesIds.slice(start, end)
  const stories = await getItems(currentPageIDs)

  return { stories, next: end < storiesIds.length ? page + 1 : null }
}
