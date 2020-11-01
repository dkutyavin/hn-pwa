import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export function Providers({ children }: React.PropsWithChildren<{}>) {
  return <BrowserRouter>{children}</BrowserRouter>
}
