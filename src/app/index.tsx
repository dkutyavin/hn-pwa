import React from 'react'
import { Layout } from '../components/layout'
import { Root } from '../pages/root'
import { Providers } from './providers'
import './generated-styles.css'

export function App() {
  return (
    <Providers>
      <Layout>
        <Root />
      </Layout>
    </Providers>
  )
}
