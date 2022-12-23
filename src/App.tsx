import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextContent from './TextContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextContent/>
      </header>
    </div>
  );
}

export default App;
