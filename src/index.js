import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import "./style.sass";

render(<App />, document.getElementById("root"));
