import React from 'react'

function Footer() {
  return (
    <div className='foot'>
    <div className="footCent">
    <div className="contOne">
      <p><b>ABOUT US</b></p>
      <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
    </div>
    <div className="contTwo">
      <p><b>MENUS</b></p>
      <p>HOME</p>
      <p>SERVICES</p>
      <p>PRODUCTS</p>
      <p>CAREER</p>
    </div>
    <div className="contThree">
      <p><b>LEARN MORE</b></p>
      <p>ABOUT</p>
      <p>CONTACT US</p>
      
    </div>
    <div className="contFour">
      <address>
      <b>ADDRESS</b><br/>
      Novel Tech Park, 1st Floor, Hosur Rd,<br/>
      Kudlu gate, Bengaluru, Karnataka 560068<br/>
      Phone: 0804-717-8999<br/>
      Email: hi@rubixe.com
      </address>
      <div style={{display:"flex"}}>
      <div className="locIcon"></div>
      <div className="iconTwo"></div>
      </div>
    </div>
    </div>
    <div className="copyRight">
    © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved
    </div>
  </div>
  )
}

export default Footer
