import React, { Component } from 'react';
import './App.css';
import Table from './Table'
import Form from './Form'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Table} />
          <Route exact path="/form" exact component={Form} />
        </Switch>
        
        
      </Router>
    );
  }
}

export default App;
