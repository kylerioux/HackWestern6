import React from 'react';

import './Dashboard.css';
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
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import axios from 'axios';
import logo from '../../githubLogo.png';
  
const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
 class Dashboard extends React.Component {

  state = {
    showCreate: false,
    showPostings:false,
    value:null,
    valuetext:null,
    data:{},
    profilepicurl:"",
    profilename:"",
    username:"",
    index:null,
  }

  handleCreatePost = () => {
    this.setState(() => ({
        showCreate: true,
      }))
  }

  handleSearchPost = () => {
    this.setState(() => ({
        showPostings: true,
      }))
  }

  async componentDidMount() {
    const response = await axios.get("/api/users" );
    this.setState({ data: response, profilepicurl:response.data[0].profilePictureUrl,
    profilename:response.data[0].gitHubUrl,
    
});
     
  }

  render() {
    if (this.state.showCreate === true) {
      return <Redirect to='/createform' />
  }

  if(this.state.showPostings === true){
    return <Redirect to='/matcher' />
  }
  
  
  this.state.index = this.state.profilename.lastIndexOf("/");
  this.state.username = this.state.profilename.substring(this.state.index, this.state.profilename.length); 
  
    return(
        <div >
          <header className="App-header">

            <p>DASHBOARD</p>

            <br></br>
            <div class="imgContainer">
             <img  src={logo} width="10%" height="10%" class="imgContainer"></img> 
             <p>{this.state.username}</p>
            </div>

            <img style={{borderRadius:"50%"}} src={this.state.profilepicurl} alt="No Github Profile Picture" height="150" width="150"></img>

              <br></br>
            
            <Button margin='3' variant="outlined" color="secondary" onClick={() => this.handleCreatePost()}>
              Create Posting
            </Button>

            <br></br>

            <Button margin='3' variant="outlined" color="secondary" onClick={() => this.handleSearchPost()}>
              Search Postings
            </Button>

          </header>
        </div>
        ); 
  }
}
export default Dashboard