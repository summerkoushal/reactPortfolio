import React, { useState } from "react";
import SideNav from "./SideNav";

export default function Navbar() {
  const [SideBar, setSideBar] = useState(false);

  const sidebar = () => {
    setSideBar(!SideBar);
  };

  return (
    <>
      <div className="nav-container">
        <span className="nav-logo">Summer.me</span>
        <li className="nav-link-container">
          <a className="nav-link">Home</a>
          <a className="nav-link">About</a>
          <a className="nav-link">Projects</a>
          <a className="nav-link">Contact</a>
        </li>
        {SideBar ? (
          <i className="fa fa-xmark" onClick={() => sidebar()}></i>
        ) : (
          <i className="fa fa-bars" onClick={() => sidebar()}></i>
        )}
      </div>
      {SideBar && <SideNav />}
    </>
  );
}
