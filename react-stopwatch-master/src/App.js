import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-Container'>
        <div className='App'>
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
