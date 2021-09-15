import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
