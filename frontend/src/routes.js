import React from 'react';
import Login from './public/login/login';
import Settings from './private/settings/settings'

import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Routes = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/settings" component={Settings} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes