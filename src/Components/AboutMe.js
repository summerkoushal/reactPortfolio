import React from 'react'

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="heading">About me</h1>
      <div className="about-container">
        <div className="about-1">
          I am a third Year student, pursuing bachelor of technology at Shri
          Guru Gobind Singhji institute of engineering and technology, Nanded.
          <div className='resume-btn'>
            <button className="btn btn-primary">Resume</button>
          </div>
        </div>
        <div className="about-2">
          <img
            className="profile-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TYBosqHfkiz4s1gDoNeCssDevAQnOvCPJ31URmxDFg&s"
            alt=""
          />
        </div>
      </div>
      <div className="achievement-banner">
        <div>
          projects <div>3</div>
        </div>
        <div>
          Problems solved <div>900+</div>
        </div>
      </div>
    </div>
  );
}
