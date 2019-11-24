import React from 'react';
import axios from 'axios';

import './AccountCreationQ3.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
  
 class AccountCreationQ3 extends React.Component {

  state = {
    showDashboard: false,
    chipTags:[],
    value: '',
  }

  handleInterest = async (e) => {
    e.preventDefault();
    await axios.post("/api/users/interest", { interest: this.state.value });
    this.setState({
      chipTags: [...this.state.chipTags, this.state.value],
      value: ''
    })
  }

  handleDone = async () => {    
      
this.setState(() => ({
    showDashboard: true,
  }))
}

  handleChange = (event) => {
    event.preventDefault();
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

              <form className={this.root} noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
                    
                    <TextField value={this.state.value} color="secondary" id="filled-basic" label="My Interests" variant="filled" onChange={this.handleChange} />

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