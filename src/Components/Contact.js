import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1 style={{textAlign:'center', color:"red"}}>Contact</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent:'space-evenly', minHeight:'40vh', alignItems:"center" }}>
        <div>
          <h3>Contact No</h3>
          <p>6005803295</p>
          <h3>Email</h3>
          <p>2020bcs003@sggs.ac.in</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Enter name"></input>
          <input type="text" placeholder="Subject"></input>
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
    </div>
  );
}
