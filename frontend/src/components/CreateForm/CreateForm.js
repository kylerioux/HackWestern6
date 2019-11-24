import React from "react"
import axios from 'axios';

import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

class CreateForm extends React.Component {

  state = {
    title: '',
    description: '',
    goDash: false,
  }
  styles = {
    root: {
      background: "black"
    },
    input: {
      color: "white"
    }
  };
  handleTitleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ title: value })
  }
  handleDescriptionChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ description: value })
  }

  handleDone = async (e) => {
    e.preventDefault();
    await axios.post("/api/postings/create", {
      title: this.state.title,
      description: this.state.description
    });
  }

  goToDash = async (e) => {
    this.setState(() => ({
      goDash: true
    }))
  }


  render() {


    if (this.state.goDash === true) {
      return <Redirect to='/dashboard' />
    }

    return (
      <form className={this.root} noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>

        <p>Got an idea? Find a teammate!</p>

        <TextField value={this.state.title} style={{ backgroundColor: "white", borderRadius: 5 }} color="secondary" id="filled-basic" label="Title" variant="filled" onChange={this.handleTitleChange} InputProps={{className: this.styles.input}}/>
        <br />
        <br />
        <TextField value={this.state.description} style={{ backgroundColor: "white", borderRadius: 5 }} rows="4" color="secondary" multiline id="filled-basic" label="Description" variant="filled" onChange={this.handleDescriptionChange} />
        <br />
        <br />
        <Button size='large' margin='3' variant="outlined" color="secondary" onClick={this.handleDone}>
          Post
        </Button>
        <br />
        <br />
        <Button size='large' margin='3' variant="outlined" color="Primary" onClick={this.goToDash}>
          Back to dasboard
        </Button>
      </form>
    );
  }
}
export default CreateForm;