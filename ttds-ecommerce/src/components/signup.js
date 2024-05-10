import React, { Component } from "react";

class SignupPage extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        <p>Fullname</p>
        <input placeholder="Enter fullname"></input>
        <p>Phone Number</p>
        <input placeholder="Enter phone number" type="number"></input>
        <p>Email</p>
        <input placeholder="Enter active email" type="email"></input>
        <p>Password</p>
        <input placeholder="Enter secured password" type="password"></input>
                <br></br>
                <br></br>
        <button>Signup</button>
      </div>
    );
  }
}

export default SignupPage;
