export interface Item {
  id: ID
  type: ItemType
  by: string
  time: number
  kids?: ID[]

  deleted?: boolean
  text?: string
  title?: string
  dead?: boolean
  parent?: ID
  url?: string
  score?: number
  descendants?: number
}

export interface Story extends Item {
  type: 'story'
  title: string
  url: string
  score: number
  descendants: number
}

export interface Comment extends Item {
  type: 'comment'
  text: string
  parent: ID
}

type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt'

export type ID = string
