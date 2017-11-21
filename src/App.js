import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/roster">Roster</Link></li>
            <li><Link to="/roster/222">No.222 Player</Link></li>
        </ul>
          <Main/>
      </div>
    );
  }
}

export default App;
