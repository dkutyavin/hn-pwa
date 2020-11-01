import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TopPage } from './top'

export function Root() {
  return (
    <Switch>
      <Route path="/">
        <TopPage />
      </Route>
    </Switch>
  )
}
