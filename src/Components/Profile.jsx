import React from "react";

export default function Profile() {
  return (
    <>
      <div
        className="container profile-tech-container"
        style={{ padding: "0px 40px" }}
      >
        {/* profile container  */}
        <div className="profile-container">
          <div className="profile-text">
            <h2 style={{ display: "flex" }}>
              Front-End React Developer &nbsp;
              <img alt="hand" style={{ height: "2rem" }} src="./hand.png" />
            </h2>
            {/* &nbsp; */}
            <span className="auto-type">
              Hi, I'm Summer Koushal. A passionate Front-end React Developer
              from Jammu, India.
            </span>
          </div>

          <div className="profile-photo">
            <img
              width={"100%"}
              src="https://cdni.iconscout.com/illustration/premium/thumb/programmer-illustration-svg-download-png-5624394.png"
              alt="profile"
            />
          </div>
        </div>
        {/* technology container  */}
        <div
          className="technology"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span>Tech Stack&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;</span>
          <div
            align="center"
            style={{
              display: "flex",
              alignSelf: "center",
              // minWidth: "550px",
              minHeight: "120px",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {" "}
            <li href="https://skillicons.dev" style={{ margin: "1rem" }}>
              <img alt="skills" src="https://skillicons.dev/icons?i=html,css" />
            </li>
            <li href="https://skillicons.dev" style={{ margin: "1rem" }}>
              <img
                alt="skills"
                src="https://skillicons.dev/icons?i=js,bootstrap"
              />
            </li>
            <li href="https://skillicons.dev" style={{ margin: "1rem" }}>
              <img
                alt="skills"
                src="https://skillicons.dev/icons?i=git,react"
              />
            </li>
            <li href="https://skillicons.dev" style={{ margin: "1rem" }}>
              <img alt="skills" src="https://skillicons.dev/icons?i=py,cpp" />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
