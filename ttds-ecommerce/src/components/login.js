import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <p>Email</p>
                <input placeholder='Enter active email'></input>
                <p>Password</p>
                <input placeholder='Enter secured password' type='password'></input>
                <br></br>
                <br></br>
                <button>Login</button>
            </div>
        );
    }
}

export default LoginPage;