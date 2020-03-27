import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Profile from './pages/Profile/index';
import NewIncident from './pages/NewIncident/index';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>

        <Route path="/profile" component={Profile}/>
        <Route path="/incidents/new" component={NewIncident}/>
        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;