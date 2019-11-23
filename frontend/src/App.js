import React from 'react';
import logo from './portfolio.png';
import './App.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import { Redirect } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

function redirect(e) {
  e.preventDefault();
  console.log('The REDIRECT link was clicked.');
}

function App() {
  return (

    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> 

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function Home() {
  return(  <div className="App">
  <header className="App-header">

    <img src={logo} className="App-logo" alt="logo" />

    <Typography variant="h5" component="h5">
      Welcome to Portfol.io
    </Typography>

    <br></br>

    <Button variant="contained" color="primary" onClick={handleClick}>
      sign in with github
    </Button>

    <br></br>
      
    <Button variant="contained" color="primary" onClick={redirect}>
      <Link to="/about">REDIRECT BUTTON</Link>
    </Button>
  </header>
</div>) 

}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
