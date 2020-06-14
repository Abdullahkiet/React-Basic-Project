import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        First React App by Muhammad Abdullah <br /> <br />Twitter Handel:

        </p>
        <a
          className="App-link"
          href="https://twitter.com/MAbdullahDev"
          target="_blank"
          rel="noopener noreferrer"
        >@MAbdullahDev
        </a>
      </header>
    </div>
  );
}

export default App;
