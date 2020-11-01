import React from 'react'
import { useQuery } from 'react-query'
import { getTopPage } from '../api'

export function TopPage() {
  const { data, status } = useQuery('top', getTopPage)

  if (status === 'loading') {
    return <div>Грузим</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data!.map((it: any) => (
        <pre>{it.title}</pre>
      ))}
    </div>
  )
}
