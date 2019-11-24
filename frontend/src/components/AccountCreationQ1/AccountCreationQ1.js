import React from 'react';
import axios from 'axios';

import './AccountCreationQ1.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import { Redirect } from 'react-router-dom'

class AccountCreationQ1 extends React.Component {

  state = {
    showQuestion2: false,
  }
  handleLevel = async (type) => {

    switch (type) {
      case 1:
        await axios.post("/api/users/exp", { experience: "BEGINNER" });
        break;
      case 2:
        await axios.post("/api/users/exp", { experience: "INTERMEDIATE" });
        break;
      default:
        await axios.post("/api/users/exp", { experience: "EXPERT" });
    }

    this.setState(() => ({
      showQuestion2: true
    }))
  }

  render() {
    if (this.state.showQuestion2 === true) {
      return <Redirect to='/accountcreationq2' />
    }

    return (

      <div className="about">
        <header className="App-header">
          <p> My level of programming proficiency is </p>
          <Button margin='3' variant="outlined" color="secondary" onClick={() => this.handleLevel(1)}>
            Beginner
            </Button>
          <div className="divider" />
          <Button margin='3' variant="outlined" color="secondary" onClick={() => this.handleLevel(2)}>
            Intermediate
          </Button>
          <div className="divider" />
          <Button margin='3' variant="outlined" color="secondary" onClick={() => this.handleLevel(3)}>
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