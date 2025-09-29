import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Estilos
import "../styles/index.css";

// Componentes
import Home from "./components/Home.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

setInterval(() => {
  seconds++;
  console.log(seconds);
  root.render(
    <React.StrictMode>
      <Home seconds={seconds} />
    </React.StrictMode>
  );
}, 1000);