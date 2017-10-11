import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'normalize.css'; 
import './App.css';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Switch>
        <Route exact path = "/" component={Home} />
        {["/redmercedes", "/heebiejeebies"].map(photos =>
        <Route path={photos} component={Home} key={photos} />
        )}
        {["/caroline", "/myneighbor", "/wendy", "/american-boyband", "/helmet-boy", "/beauty-salon"].map(films =>
        <Route path={films} component={Home} key={films} />
        )}
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
