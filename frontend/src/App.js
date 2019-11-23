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
import AccountCreationQ1 from './components/AccountCreationQ1/AccountCreationQ1.js';
import Signup from './components/Signup/Signup.js';
import AccountCreationQ2 from './components/AccountCreationQ2/AccountCreationQ2.js';


import { FormControl } from '@material-ui/core';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path='/' exact>
              <Signup />
            </Route>
            <Route path="/accountcreationq1" exact >
                <AccountCreationQ1 />
            </Route>
            <Route path="/accountcreationq2" exact >
                <AccountCreationQ2 />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}
