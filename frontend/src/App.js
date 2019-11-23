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

function handleLogin(e) {
  e.preventDefault();
  console.log('SIGN IN TO GITHUB PRESSED');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
 

      <img src={logo} className="App-logo" alt="logo" />

      <Typography variant="h5" component="h5">
        Welcome to Portfol.io
      </Typography>

      <br></br>

      <Button variant="contained" color="primary" onClick={handleLogin}>
        sign in with github
      </Button>

      <br></br>

      <Router>
      <Link to="/accountcreation">
      <Button variant="contained" color="primary" >
          REDIRECT TO ACCOUNT CREATION FORM
      </Button>
      </Link>
     
      <Switch>
            <Route path="/accountcreation">
              <AccountCreation />
            </Route>
            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
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

export default App;
