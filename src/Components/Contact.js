import React from 'react'

export default function Contact() {
  return (
    <div>
      <h2 id="contact" className="heading">
        Contact
      </h2>
      <div className="contact-container">
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
