import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Index } from '.'

export function Root() {
  return (
    <Switch>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  )
}
