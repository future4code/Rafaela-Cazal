import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/LoginPage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* <Route path="/videos" exact component={Videos} /> */}
        {/* {<Route path="/register" component={Register} /> } */}
        {/* {<Route path="/changePassword" component={ChangePassword} /> } */}
      </Switch>
    </BrowserRouter>
  )
}