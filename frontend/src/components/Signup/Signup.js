import React from 'react';
import axios from 'axios';
import './Signup.css';
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
import logo from '../../portfolio.png';

function handleLogin(e) {
    e.preventDefault();
    axios.get("/api/auth/github/login",{
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((x)=>{
      if ( x.status == "OK"){
        console.log(x.status)
        return <Redirect to="/accountcreation"/>
      }
    })

  }

function Signup() {
  return(
      <div className="Signup">
      <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />

      <Typography variant="h5" component="h5">
        Welcome to Portfol.io
      </Typography>

      <br></br>

      <Button variant="contained" color="primary" onClick={handleLogin}>
        sign in with github
      </Button>

      <Link to="/accountcreation">
            <Button variant="contained" color="primary" >
                REDIRECT TO ACCOUNT CREATION FORM
            </Button>
      </Link>

      <br></br>

      </header>


      </div> 
    ); 
}
export default Signup


