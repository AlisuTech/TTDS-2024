import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MappingComponent from "./mapping_component";

let cars=["Toyota", "Tesla","BYD","Lexus","Mercedes Benz","Chevrolet"]


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <MappingComponent></MappingComponent>
      {cars.map((item) => <p>{item}</p>)}
========
      {cars.map((item) => {
        return (<p>{item}</p>)
      })}

    </div>
  </React.StrictMode>
);

//Mapping Components - Arrays or List