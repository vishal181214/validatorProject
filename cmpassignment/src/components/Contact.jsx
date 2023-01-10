import React from 'react'

function Contact() {
  return (
    <div className='contDiv'>
      <div className='contForm'>
        <div className="contText">
        <div className="texttouch">
            <h2>GET IN TOUCH</h2><br/>
            <h5>please complete the form and we</h5>
            <h5>will get back to you.</h5>
            </div>
        </div>
        <div className="hrvert"></div>
        <div className="contDet">
            <div className="formData">
                <label htmlFor='name'><h5>Name <span>*</span></h5></label><br/>
                <input type='text' placeholder='Enter Your Name' /><br/><br/>
                <label htmlFor='email'><h5>Email <span>*</span></h5></label><br/>
                <input type='text' placeholder='Enter Your Email' /><br/><br/>
                <label htmlFor='number'><h5>Mobile Number <span>*</span></h5></label><br/>
                <input type='text' placeholder='Enter Your Mobile Number' /><br/>
                <button className='register'>Register Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
