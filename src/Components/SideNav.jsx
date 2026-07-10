import React from "react";

export default function SideNav() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "30rem",
          justifyContent: "space-evenly",
        }}
      >
        <a className="nav-link">Home</a>
        <a className="nav-link">About</a>
        <a className="nav-link">Projects</a>
        <a className="nav-link">Contact</a>
      </div>
    </>
  );
}
