import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AllRoutes />
      </div>
    );
  }
}

export default App;
