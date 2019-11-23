import React from 'react';

import './AccountCreationQ1.css';
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

import FormControl from '@material-ui/core/FormControl';
  
 class AccountCreationQ1 extends React.Component {

  state = {
    showQuestion2: false,
  }
  handleLevel = () => {
    this.setState(() => ({
      showQuestion2: true
      }))
}

  render() {
    if (this.state.showQuestion2 === true) {
      return <Redirect to='/accountcreationq2' />
  }

    return(

        <div className="about">
          <header className="App-header">
            <p> My level of programming proficiency is </p>
            <Button margin='3' variant="outlined" color="secondary"  onClick={this.handleLevel}>
              Beginner
            </Button>
            <div className="divider"/>
            <Button margin='3' variant="outlined" color="secondary"  onClick={this.handleLevel}>
              Intermediate
            </Button>
            <div className="divider"/>
            <Button margin='3' variant="outlined" color="secondary"  onClick={this.handleLevel}>
              Expert
            </Button>

              <br></br>
          
          </header>
        </div>
        ); 
  }
}
export default AccountCreationQ1

// interests (list of strings)
// group size (2-10)
// experience (1,2,3)