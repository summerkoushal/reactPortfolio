import React from 'react'

export default function Profile() {

  // var typed = new Typed(".auto-type", {
  //   strings: ["sdfdsf", "ertwet"],
  //   typeSpeed: 50,
  // });

  return (
    <div className="profile-container ">
      <div className="profile-text text-primary">
        <span className="profile-hello gradient-color">Hello There,</span>{" "}
        <br />
        <span
          style={{
            marginTop: "5px",
          }}
        >
          <span>
            My name is Summer Koushal <br />
          </span>
        </span>
        <span
          style={{
            marginTop: "5px",
          }}
        >
          I am a <span className="auto-type">Developer...</span>
        </span>
      </div>
      <div className="profile-photo">
        <img
          width={"100%"}
          src="https://www.pratikd.in/static/cb473f4754dd6b6b3790490ff4458800/2c936/banner.webp"
        ></img>
      </div>
    </div>
  );
}
