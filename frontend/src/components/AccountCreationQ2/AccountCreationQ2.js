import React from 'react';

import './AccountCreationQ2.css';
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
  

 class AccountCreationQ2 extends React.Component {

  state = {
    showQuestion2: false,
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
            <p>My preferred group size is</p>
              <br></br>
      <Slider
        defaultValue={6}
        value={this.state.value}
        getAriaValueText={this.state.valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={2}
        max={20}
        onChange={this.handleChange}
      />
        <br></br>
        <Button margin='3' variant="outlined" color="secondary"  onClick={this.handleGroupSize}>
            Next
        </Button>
            



          </header>
        </div>
        ); 
  }
}
export default AccountCreationQ2