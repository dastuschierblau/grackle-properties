import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import SearchPage from './components/SearchPage';
import Unit from './components/Unit';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/search' component={SearchPage} />
            <Route path='/:propertyId/:unitId' component={Unit} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
