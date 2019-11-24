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
  }
  handleChange = (event, newValue) => {
    this.state.value=newValue;
  }
handleGroupSize = () => {
    console.log(this.state.value)
    this.setState(() => ({
    showQuestion2: true
    }))
}

  render() {
    if (this.state.showQuestions === true) {
      return <Redirect to='/accountcreationq2' />
  }
  
    return(
        <div >
          <header className="App-header">
            <p>MY DASHBOARD</p>
              <br></br>

          </header>
        </div>
        ); 
  }
}
export default Dashboard