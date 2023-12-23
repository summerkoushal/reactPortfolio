import React from 'react'

export default function Contact() {
  return (
    <div>
      <h2 className='heading'>Contact</h2>
      <div className='contact-container'>
        <div className='contact-box1'>
          <h3 className='contact-heading'>Contact No</h3>
          <h6>+91-6005803295</h6>
          <br/>
          <h3 className='contact-heading'>Email</h3>
          <h6>2020bcs003@sggs.ac.in</h6>
        </div>
        <div  className='contact-box2'>
          <input className='contact-input' type="text" placeholder="Enter name"></input>
          <input className='contact-input' type="text" placeholder="Subject"></input>
          <textarea className='contact-input contact-textarea' placeholder="Message"></textarea>
          <button className='btn btn-warning contact-submit'>Submit</button>
        </div>
      </div>
    </div>
  );
}
