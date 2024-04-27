import React from 'react'; 
// All React tools to help develop a React based application
import ReactDOM from 'react-dom/client'; 
// The tools needed to interact between reactjs and native web dev (HTML, CSS & JS)
import './index.css';
import Header from './header'
import Body from './body';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <div>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</React.StrictMode>
);
// Function - JSX
// Why JS
// 1. Componentization (Component Based Architecture) 
      //1b one component with different dynamic features
// 2. Routing & Navigation
// 3. State Management