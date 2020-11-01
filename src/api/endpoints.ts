const API_URL = 'https://hacker-news.firebaseio.com/v0'

type EntityType = 'beststories' | 'topstories' | 'newstories' | string
const entityUrl = (entityType: EntityType) => `${API_URL}/${entityType}.json`

export const ENDPOINTS = {
  TOP: () => entityUrl('topstories'),
  BEST: () => entityUrl('beststories'),
  NEW: () => entityUrl('newstories'),
  ITEM: (id: string) => entityUrl(`item/${id}`),
}
