import React, { Component } from 'react';
import produce from '../produce.json';
import Login from '../Login';
// import Box from '@material-ui/core/Box';


class Account extends Component {

    state = {
        produce
    };

    render() {
        return (
            <div className="container mx-auto">

                <Login />

            </div>
        )
    }
}

export default Account;