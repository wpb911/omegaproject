import React, { Component } from 'react';
import produce from '../produce.json';
import LoginCard from '../LoginCard';
// import Box from '@material-ui/core/Box';


class Login extends Component {

    state = {
        produce
    };

    render() {
        return (
            <div className="container mx-auto">

                <LoginCard />

            </div>
        )
    }
}

export default Login;