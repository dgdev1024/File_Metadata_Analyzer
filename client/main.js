///
/// \file   main.js
/// \brief  The entry point for the application's client side.
///

// Imports
import React from "react";
import ReactDOM from "react-dom";

// Component Imports
import App from "./js/app";

// Style Imports
import "./scss/style.scss";

// Render
ReactDOM.render(
    <App />,
    document.getElementById("content")
);