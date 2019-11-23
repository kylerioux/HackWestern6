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
import AccountCreation from './components/AccountCreation/AccountCreation.js';
import Signup from './components/Signup/Signup.js';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path='/' exact>
              <Signup />
            </Route>
            <Route path="/accountcreation" exact >
                <AccountCreation />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}
