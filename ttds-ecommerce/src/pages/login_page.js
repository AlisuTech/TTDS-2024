import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, emailChanged] = useState("")
  const [password, passwordChanged] = useState("")
  const navigate=useNavigate()
  const LoginAction=()=>{
    if(email==="gideon@gmail.com" && password==="1234"){
        navigate("/home/Gideon Edoghotu")
    }
    else{
        alert("Invalid Login Details")
    }
  }
  return (
    <div className="flex-container">
      <div>
        <h1>Login Page</h1>
        <p>Email</p>
        <input
          placeholder="Enter active email"
          value={email}
          onChange={(e) => emailChanged(e.target.value)}
        ></input>
        <p>Password</p>
        <input
          placeholder="Enter secured password"
          type="password"
          value={password}
          onChange={(e) => passwordChanged(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button onClick={()=>LoginAction()}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
