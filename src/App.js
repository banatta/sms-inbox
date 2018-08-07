import React, { Component } from 'react';
import './App.css';

import Inbox from './Inbox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SMS Inbox</h1>
        </header>
        <Inbox />
      </div>
    );
  };
};

export default App;
