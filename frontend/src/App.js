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

// function Home() {
//    return(
//      <p>hey</p>
//    );  
//   <div className="App">
//     <header className="App-header">

//     <img src={logo} className="App-logo" alt="logo" />

//     <Typography variant="h5" component="h5">
//       Welcome to Portfol.io
//     </Typography>

//     <br></br>

//     <Button variant="contained" color="primary" onClick={handleLogin}>
//       sign in with github
//     </Button>

//     <br></br>

//     <Link to="/accountcreation">
//      <Button variant="contained" color="primary" >
//         REDIRECT TO ACCOUNT CREATION FORM
//      </Button>
//     </Link>

//   </header>
// </div>

//}

// function About() {
//   return(
//     <div className="about">
//     <header className="App-header">
//     <p>Account Creation</p>

//     </header>
    
//     </div>
//   ) 
// }

// function Users() {
//   return <h2>Users</h2>;
// }

