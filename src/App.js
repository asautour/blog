import React, { Component } from 'react';
import Navigation from './components/Navigation';

import './App.css';


export default class App extends Component {
  render() {
    return (
      <div >
        <Navigation />
        <h1 className="App">Main content should go here</h1>
      </div>
    );
  }
}
