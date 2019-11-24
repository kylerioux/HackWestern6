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
  
const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
//   function valuetext(value) {
//     return `${value}°C`;
//   }
  

 class Dashboard extends React.Component {

  state = {
    showNext: false,
    value:null,
    valuetext:null,
    data:{},
    profilepicurl:"",
  }

  handleCreatePost = () => {
    console.log('create')
  }

  handleSearchPost = () => {
    console.log('search')
  }

  async componentDidMount() {
    const response = await axios.get("/api/users" );
    
    this.setState({ data: response, profilepicurl: response.data[0].profilePictureUrl });
    console.log(this.state.profilepicurl)
    console.log(response)
  }


  render() {
    if (this.state.showQuestions === true) {
      return <Redirect to='/accountcreationq2' />
  }
  
    return(
        <div >
          <header className="App-header">

            <p>DASHBOARD</p>

            <br></br>
            
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