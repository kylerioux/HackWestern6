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
import AccountCreationQ3 from './components/AccountCreationQ3/AccountCreationQ3.js';
import CreateForm from './components/CreatePost/CreateForm.js';
import Dashboard from './components/Dashboard/Dashboard.js';
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
            <Route path="/accountcreationq3" exact >
                <AccountCreationQ3 />
            </Route>
            <Route path="/create" exact >
                <CreateForm />
            </Route>
            <Route path="/dashboard" exact >
                <Dashboard />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}
