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
      //var j = await axios.get("/api/users");
      console.log(p.data)

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
    
        <Button variant="outlined" color="secondary">
            <a href="http://127.0.0.1:3001/api/auth/github/login">sign in with github</a>
        </Button>
        
        <br></br>
        <table>
          <tr>
            <th  style={{ paddingLeft:"2%",textAlign:"left"}}>
            <p style={{display:"inline", textAlign:"left"}}>
          portfol.io is a central hub for developers to gather and enhance their skills while building up a software portfolio. browse through suggested projects based on your current skills., join teams of other like-minded individuals and create meaningful projects to add to your resume.
          </p>
            </th>
            <th>
            <img style={{display:"inline", borderRadius:"5%"}} src="https://media.istockphoto.com/photos/shes-bringing-some-of-her-bright-ideas-to-the-front-picture-id609072850?k=6&m=609072850&s=612x612&w=0&h=wzM_yz3vXBo2bDHUUdPJtppKdC0F2XE0ey2XLWF99ho=" />

            </th>
          </tr>
        </table>

        </header>
    
    
        </div>); 
    }
 
}
export default Signup