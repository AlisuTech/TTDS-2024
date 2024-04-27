import React from 'react'; 
// All React tools to help develop a React based application
import ReactDOM from 'react-dom/client'; 
// The tools needed to interact between reactjs and native web dev (HTML, CSS & JS)
import './index.css';

// Access Third Party Tools
import './index.css'
import {mainOne,mainTwo} from './index_async'
import * as JSFile from './index_async'
// import JSFile from './index_async'

// import {function_one, function_two} from '../../js/index_async'
// let JSFile='../../js/index_async'

// JSFile.mainOne()
// JSFile.mainTwo()
// JSFile.mainThree()
mainOne()
mainTwo()
JSFile.mainThree()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="div-class"/>
  </React.StrictMode>
);