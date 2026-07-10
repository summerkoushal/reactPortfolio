import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1 className="text-center m-3 mt-5 font-bold text-2xl">Contact</h1>
      {/* sm - small md - medium (for media query) */}
      <div className="min-h-96 flex my-12 mx-auto justify-evenly w-9/12 rounded-lg
      border-solid border-black border-2"> {/* width 70 % */}
        <div className="contact-box1">
          <h3 className="contact-heading">Contact No</h3>
          <h6>+91-6005803295</h6>
          <br />
          <h3 className="contact-heading">Email</h3>
          <h6>2020bcs003@sggs.ac.in</h6>
        </div>
        <form
          className="contact-box2"
          action="https://formspree.io/f/mwkgeadn"
          method="POST"
        >
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Enter name"
            autoComplete="off"
          ></input>
          <input
            className="contact-input"
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
          ></input>
          <input
            className="contact-input"
            type="text"
            name="subject"
            placeholder="Subject"
            autoComplete="off"
          ></input>
          <textarea
            className="contact-input contact-textarea"
            placeholder="Message"
            name="message"
            autoComplete="off"
          ></textarea>
          <button className="btn btn-warning contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
