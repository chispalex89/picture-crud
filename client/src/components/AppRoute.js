import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home'
import NotFound from './404'
//import CreateContact from './contact/create/CreateContact'

export default function AppRoute() {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
