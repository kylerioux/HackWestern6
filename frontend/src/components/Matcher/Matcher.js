import React from 'react';
import axios from 'axios';
import './Matcher.css';
import 'typeface-roboto';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function handleLogin(e) {


}

class Matcher extends React.Component {
    state = {
        title: "Fake Posting",
        description: "This is a fake posting. Not a bad idea for a real posting, but horrible one for a fake one. (no clue what that means)"
    }
    getMatch = async () => {
        const response = await axios.get("/api/postings/match");
        console.log("response");
        console.log(response);
        // this.setState(() => ({

        // }))
    }
    handleRedirect = (e) => {
        e.preventDefault();
    }

     componentDidMount() {
        this.getMatch();
      }
    render() {
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
                </div>
            </div>);
    }

}
export default Matcher