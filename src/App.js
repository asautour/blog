import React, { Component } from 'react';
import Navigation from './components/Navigation';

import './App.css';


class App extends Component {
  render() {
    return (
      <div >
        <Navigation />
        <h1 className="container">Hello</h1>
      </div>
    );
  }
}

export default App;