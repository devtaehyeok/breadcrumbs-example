/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/living" element={"Living Room"} />
        <Route path="/living/couch" element={"Couches"} />
        <Route path="/living/couch/sectional" element={"Sectionals"} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
