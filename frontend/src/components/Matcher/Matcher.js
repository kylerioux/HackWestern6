import React from 'react';
import axios from 'axios';
import './Matcher.css';
import 'typeface-roboto';

function handleLogin(e) {


}

class Matcher extends React.Component {
    state = {
        title: "Fake Posting",
        description: "This is a fake posting. Not a bad idea for a real posting, but horrible one for a fake one. (no clue what that means)"
    }
    getMatch = async () => {
        this.setState(() => ({
            
        }))
    }
    handleRedirect = (e) => {
        e.preventDefault();
    }

    render() {


        return (
            <div className="Matcher">
                <header className="App-header">


                </header>


            </div>);
    }

}
export default Matcher