import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

// class App extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);