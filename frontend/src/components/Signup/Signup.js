import React from 'react';

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



class Signup extends React.Component {
    state = {
        showQuestions: false,
      }
    handleLogin = () => {
        this.setState(() => ({
            showQuestions: true
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
            sign in with github
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