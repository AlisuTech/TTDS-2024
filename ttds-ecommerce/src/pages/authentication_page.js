import React, { useState } from "react";
import "../styles/auth.css";
import LoginPage from "../components/login";
import SignupPage from "../components/signup";
import {Link} from 'react-router-dom'

const AuthenticationPage = () => {
    const [isLoginPage,isLoginPageChanged]=useState(true)
    const [showAuthPage,showAuthPageChanged]=useState(true)

  const altAuthPages=(show_login_page)=>{
    showAuthPageChanged(false)
    isLoginPageChanged(show_login_page)
  }
  return (
    <div className="flex-container">
      {showAuthPage ? (
        <div>
        <Link to="/login"><div className="button">
          <p>Direct Login</p>
        </div></Link>
          <div className="button" onClick={()=>altAuthPages(true)}>
            <p>Login</p>
          </div>
          <div className="button" onClick={()=>altAuthPages(false)}>
            <p>Sign Up</p>
          </div>
        </div>
      ) : (
        <div>
          {isLoginPage ? (
            <div>
              <LoginPage></LoginPage>
            </div>
          ) : (
            <div>
              <SignupPage></SignupPage>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthenticationPage;

// Ternary Operator <condition>?True:False
