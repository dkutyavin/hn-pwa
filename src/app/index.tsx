import React from 'react'
import { Root } from '../pages/root'
import { Providers } from './providers'

export function App() {
  return (
    <Providers>
      <Root />
    </Providers>
  )
}
