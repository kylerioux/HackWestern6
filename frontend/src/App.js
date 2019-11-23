import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Portfol.io
        </p>
        <Button variant="contained" color="primary" onClick={handleClick}>
          sign in with github
        </Button>


      </header>
    </div>
  );
}

export default App;
