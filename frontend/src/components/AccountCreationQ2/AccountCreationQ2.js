import React from 'react';
import axios from 'axios';

import './AccountCreationQ2.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import { Redirect } from 'react-router-dom'
import Slider from '@material-ui/core/Slider';

class AccountCreationQ2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showQuestion3: false,
      value: 0,
    }
  }

  handleChange = (event, newValue) => {
    this.setState(() => ({
      value: newValue
    }))
  }
  handleGroupSize = async () => {
    await axios.post("/api/users/group-size", { size: this.state.value });
    this.setState(() => ({
      showQuestion3: true
    }))
  }

  render() {
    if (this.state.showQuestion3 === true) {
      return <Redirect to='/accountcreationq2' />
    }

    return (
      <div >
        <header className="App-header">
          <p>My preferred group size is</p>
          <br></br>
          <Slider
            defaultValue={6}
            value={this.state.value}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={2}
            max={20}
            onChange={this.handleChange}
          />
          <br></br>
          <Button margin='3' variant="outlined" color="secondary" onClick={this.handleGroupSize}>
            Next
        </Button>




        </header>
      </div>
    );
  }
}
export default AccountCreationQ2