import React, { Component } from 'react';
import './App.css';
//import './boot.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './Pages/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path = "/" component={Landing}/>
        </Router>
      </div>
    );
  }
}

export default App;
