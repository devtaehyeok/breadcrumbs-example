/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import "./styles.css";
import AriaExample from "./Aria.example";
import BreadCrumbs from "./AriaBreadCrumbs";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <AriaExample />
      <BreadCrumbs />
      <Outlet />
    </div>
  );
}
