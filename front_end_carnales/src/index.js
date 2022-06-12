import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./stylesheets/colorPalette.css";

class Index extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

render(<Index />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
