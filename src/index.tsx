import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import css from "./style.css";
import './particles';

console.log({ css });

const container = document.getElementById("root");

ReactDOM.render(<App />, container);
