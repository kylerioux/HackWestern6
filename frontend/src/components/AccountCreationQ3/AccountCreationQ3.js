import React from 'react';
import axios from 'axios';

import './AccountCreationQ3.css';
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
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
  
//   function valuetext(value) {
//     return `${value}°C`;
//   }

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  
 class AccountCreationQ3 extends React.Component {

  state = {
    showDashboard: false,
    chipTags:[],
    value: '',
  }

  handleInterest = async () => {
    await axios.post("/api/users/interest", { interest: this.state.value });
    this.setState(() => ({
      chipTags: [...this.state.chipTags, this.state.value],
      value: ''
    }))
  }

  handleDone = async () => {
    console.log("done")
    console.log("my ctr is: ",this.state.myCtr)
  }

  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState(() => ({
      value: value
    }))
  }

  render() {
    if (this.state.showDashboard === true) {
      return <Redirect to='/dashboard' />
  }
  
    return(
        <div >
          <header className="App-header">
            <p>My interests include</p>
              <br></br>

              <form className={this.root} noValidate autoComplete="off">
                    
                    <TextField onChange={this.handleChange} color="secondary" id="filled-basic" label="My Interests" variant="filled" />

                    <br></br>
                    <br></br>

                    {this.state.chipTags.map((tag, i) => {     
                      return (<Chip key={i} label={tag} />) 
                    })}

                    <br></br>
                    <br></br>

                    <Button size='large' margin='3' variant="outlined" color="secondary"  onClick={this.handleInterest}>
                       Enter Interest
                    </Button>

                    <br></br>
                    <br></br>

                    <Button size='large' margin='3' variant="outlined" color="secondary"  onClick={this.handleDone}>
                       Done
                    </Button>

                </form>

          </header>
        </div>
        ); 
  }
}
export default AccountCreationQ3