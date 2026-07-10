import React, { useState } from "react";
import SideNav from "./SideNav";

export default function Navbar() {
  const [SideBar, setSideBar] = useState(false);

  const sidebar = () => {
    setSideBar(!SideBar);
  };

  return (
    <>
      <div id="home"></div>
      <div className="nav-container">
        <a href="#home" className="nav-logo"> &lt;Summer/&gt; </a>
        <li className="nav-link-container">
          <a href="#home" className="nav-link"> Home </a>
          <a href="#about" className="nav-link"> About </a>
          <a href="#projects" className="nav-link"> Projects </a>
          <a href="#contact" className="nav-link"> Contact </a>
          <a href="" className="nav-link">
            {/* <input style={{ border: '2px solid green'}} type="checkbox" /> */}
            dark </a>
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
