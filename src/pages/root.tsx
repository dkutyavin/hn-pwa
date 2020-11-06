import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Page404 } from './404'
import { TopPage } from './top'

export function Root() {
  return (
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  )
}
