import React, { useState } from "react";
import * as Auth from "./forms_js"
// import img_one from "../assets/img1.jpg"

const FormsMain = () => {
    // const fullname=""
    // const email=""
    // const password=""

    // const fullnameChange=""
    // const emailChange=""
    // const passwordChange=""
    const [fullname,fullnameChange]=useState('')
    const [email,emailChange]=useState('')
    const [password,passwordChange]=useState('')
    // Manage Changes - useState()

    //Login
    // loginDetails - email & password
    const [loginDetails,loginDetailsChanged]=useState()
    const updateChangesHandler=(e)=>{
        loginDetailsChanged({...loginDetails,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <div className="style-one">
        {/* <img className="imgone" alt="Engineers" src={img_one}/> */}
        <img className="imgone" alt="Engineers" src={require("../assets/img1.jpg")}/>
        <h1>Sign Up</h1>
        <label for="fullname">Fullname</label>
        <br></br> <br></br>
        <input id="fullname" placeholder="enter value" value={fullname} onChange={(e)=>fullnameChange(e.target.value)}/>
        <br></br>
        <br></br>
        <label for="email" >Email</label>
        <br></br> <br></br>
        <input id="email" placeholder="enter value" value={email} onChange={(e)=>emailChange(e.target.value)}/>
        <br></br>
        <br></br>
        <label for="password">Password</label>
        <br></br>
        <br></br>
        <input id="password" placeholder="enter value" type="password" value={password} onChange={(e)=>passwordChange(e.target.value)}/>
        <br></br>
        <br></br>
        <button onClick={()=>Auth.signup(fullname,email,password)}>Sign Up</button>
        <br></br>
        <br></br>
        <p id="result1">-----Result------</p>
      </div>
      <div className="style-two">
        <h1>Login</h1>
        <label for="email2">Email</label>
        <br></br> <br></br>
        <input id="email2"  name="Email" placeholder="enter value" onChange={updateChangesHandler}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label for="password2">Password</label>
        <br></br>
        <br></br>
        <input id="password2" placeholder="enter value" type="password" name="password" onChange={updateChangesHandler}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label for="password2">New Input</label>
        <br></br>
        <br></br>
        <input id="password2" placeholder="enter value" name="newinput" onChange={updateChangesHandler} type="checkbox"/>
        <br></br>
        <br></br>
        <button onClick={()=>alert(loginDetails.Email)}>Login</button>
        <br></br>
        <br></br>
        <p id="result2">-----Result------</p>
      </div>
    </div>
  );
};

export default FormsMain;
