import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AuthenticationPage from './pages/authentication_page';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import LoginPage from './pages/login_page';
import HomePage from './pages/home_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenticationPage></AuthenticationPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/home/:profile_name" element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
