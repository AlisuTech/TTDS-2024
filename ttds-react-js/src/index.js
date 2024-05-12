import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormsMain from "./forms components/forms_main";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import MappingComponent from "./mapping_component";
import MenuHeader from "./forms components/menu_header";
import RouteParam from "./forms components/route_param";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <MenuHeader></MenuHeader>
        <Routes>
          <Route path="/" element={<FormsMain></FormsMain>}></Route>
          <Route path="/hm" element={<FormsMain></FormsMain>}></Route>
          <Route path="/home" element={<MappingComponent/>}></Route>
          <Route path="/home/page" element={<MappingComponent/>}></Route>
          <Route path="/param/:message" element={<RouteParam></RouteParam>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
// Route - Two Key Attribute (path & element)

// Path of route - localhost:3000 or localhost:3000/

// Navigation - moving from one page to another, you need the of the page/route

// Root Domain - Base URL - localhost:3000
// home - /home
// signup - /signup

// ReactJS - Redux
// State Management
// 1. Observes a change and performs an action based on the change
// 2. Move information from one page to another
// 3. Store information over the app run life time 
// E.g Loader, Authentication persistence

// Redux Steps
// 1. Create a Store (State Store - localStorage)
// 2. Create a Reducer (Receives and Dispatches Information/Events)
// 3. Publish an Event or Change
// 4. Subscribe to Event or Change

// WF: Publish Event >> Reducer, receives and Dispatches >> Subscriber Receives the event and acts on it >> All process are stored in the store