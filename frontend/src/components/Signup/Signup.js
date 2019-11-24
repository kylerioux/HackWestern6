import React from 'react';
import axios from 'axios';
import './Signup.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import logo from '../../portfolio.png';
import { Redirect } from 'react-router';

function handleLogin(e) {
 

  }

class Signup extends React.Component {
    state = {
        showQuestions: false,
      }
    handleLogin = async () => {
      
     var p = await axios.get("/api/auth/github/login",{ crossDomain: true });

      this.setState(() => ({
          showQuestions: p.statusText == "OK"
        }))
    }
    handleRedirect = (e) => {
        e.preventDefault();
    }

    render(){
        if (this.state.showQuestions === true) {
            return <Redirect to='/accountcreationq1' />
        }

        return(
        <div className="Signup">
        <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
    
        <Typography variant="h5" component="h5">
            Welcome to Portfol.io
        </Typography>
    
        <br></br>
    
        <Button variant="outlined" color="secondary" onClick={this.handleLogin}>
            <a href="http://206.189.64.155:3000/api/auth/github/login">sign in with github</a>
        </Button>
        
        <br></br>
    
       
            <Button variant="outlined" color="secondary" onClick={this.handleRedirect} >
                REDIRECT TO ACCOUNT CREATION FORM
            </Button>
      
    
        </header>
    
    
        </div>); 
    }
 
}
export default Signup