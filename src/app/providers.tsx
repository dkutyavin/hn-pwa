import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'

const queryCache = new QueryCache()

export function Providers({ children }: React.PropsWithChildren<{}>) {
  return (
    <BrowserRouter>
      <ReactQueryCacheProvider queryCache={queryCache}>{children}</ReactQueryCacheProvider>
    </BrowserRouter>
  )
}
