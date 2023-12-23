import React from 'react'

export default function AboutMe() {
  return (
    <>
      <div className="aboutme-container">
        <div className="about-image-container">
          <img
            className="about-img"
            src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
            alt="aboutMe image"
          />
        </div>
        <div className="about-text">
          <strong>ABOUT ME</strong> <br />{" "}
          <b> A dedicated Front-end Developer based in Belgrade, Serbia 📍</b>{" "}
          <br /> As a Junior Front-End Developer, I possess an impressive
          arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.
          I excel in designing and maintaining responsive websites that offer a
          smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </div>
      </div>
    </>
  );
}
