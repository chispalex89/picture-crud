import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home'
//import CreateContact from './contact/create/CreateContact'

export default function AppRoute() {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    </Router>
  );
}
