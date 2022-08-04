import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));


async function loadCarCar() {
  let serviceData;
  const serviceResponse = await fetch("http://localhost:8080/api/appointments/");
  
  if (serviceResponse.ok) {
    serviceData = await serviceResponse.json();
    console.log("service data:", serviceData)
  } else {
    console.error(serviceResponse);
  }

  root.render(
    <React.StrictMode>
      <App appointments={serviceData.appointments} />
    </React.StrictMode>
  );
}
loadCarCar();
