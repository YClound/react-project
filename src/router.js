import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './Main';
import NotFound from './pages/NotFound';

class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" render={() => {
            return (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </Admin>
            );
          }}></Route>
          <Route path="/order/detail" component={Login}></Route>
        </App>
      </HashRouter>
    )
  }
}

export default IRouter;