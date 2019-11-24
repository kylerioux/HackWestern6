import React from 'react';
import axios from 'axios';
import './Matcher.css';
import 'typeface-roboto';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom'


class Matcher extends React.Component {
    state = {
        showDashboard:false,
        id: 0,
        title: "No posts found",
        description: "Please try again later"
    }
    getMatch = async () => {
        const response = await axios.get("/api/postings/match");
        if(response.data.post != null)
        {
            this.setState(() => ({
                title: response.data.post.title,
                description: response.data.post.description,
                id: response.data.post._id
            }))
        }

    }
    handleNext = async () => {
        await axios.post("/api/postings/skip", {id: this.state.id});
        this.getMatch();
    }

     componentDidMount() {
        this.getMatch();
      }

      goToDash = async (e) => {
        this.setState(() => ({
            showDashboard: true
        }))
      }

    render() {
        if (this.state.showDashboard === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div className="Matcher" style={{ width: "100%" }}>
                <div style={{ width: "35%", margin: "auto" }}>
                    <Card style={{ color: "white", backgroundColor: "#333b4a", height: 300, borderRadius: 10 }}>
                        <CardContent>
                            <Typography gutterBottom>
                                {this.state.title}
                            </Typography>
                            <hr />
                            <Typography variant="body2" component="p">
                                {this.state.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                    <br />
                    <Button style={{ width: "46%", marginBottom: 0, marginLeft: "auto", backgroundColor: "cornflowerblue", color: "white", marginRight: 10 }} size="small">Message</Button>
                    <Button style={{ width: "46%", marginBottom: 0, marginLeft: "auto", backgroundColor: "#f50057", color: "white" }} size="small">Next</Button>
               
                    <br></br>
                    <br></br>
                    <Button size='large' margin='3' variant="outlined" color="Primary"  onClick={this.goToDash}>
                       Back to dasboard
                    </Button>
                </div>
            </div>);
    }

}
export default Matcher