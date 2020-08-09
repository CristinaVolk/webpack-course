import jQuery from "jquery";
import React from "react";
import { render } from "react-dom";
import "core-js/es/promise";
import "regenerator-runtime/runtime";
import AppService from "@models/app.service";
import { config } from "./models/config";
import "./models/header.component";
import * as json from "@/assets/json";
//import csv from "./assets/data.csv";
import cuteGirl from "./assets/kid";
import "./babel";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/.scss";

console.log("Config key: ", config.key);
const service = new AppService("Hello, Volk", cuteGirl);

jQuery(document).ready(function ($) {
  $("pre").addClass("code").html(service.log());
});

console.log(json.default, service.log());
//console.log("csv: ", csv);

const App = () => {
  return (
    <div className='container'>
      <h1>Webpack Course</h1>
      <div className='logo'></div>
      <hr />
      <pre />
      <hr />
      <div className='box'>
        <h2>Less</h2>
      </div>
      <div className='card'>
        <h2>Scss</h2>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
