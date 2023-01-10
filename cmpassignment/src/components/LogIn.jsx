import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();

  const collectData = async ()=> {
    try {
      const data = await axios.post('http://localhost:3500/home/users/login',{
        email,
        password,
      });
      if(data){
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("User LogIn Sucessfull");
        (data.data.isAdmin) ? navigate('/admin') : navigate('/');
      }
      
    } catch (error) {
      toast.error("Invalid email or password");
    }
  }
  return (
    <div style={{ width: "40vw", height: "65vh", margin: "auto"}}>
        <Form style={{border:"1px solid black", padding:"5% 10% 15% 10%", marginTop:"5%"}}>
        <h3 style={{marginBottom:"5%"}}>Log In</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              Email id should contain @
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>

          <button className='registerLogin' onClick={collectData} type="button" >Log In</button><br/>
          <Link to='/register' style={{marginLeft:"10vw",textDecoration:"none"}}><b>New User?</b> Register Now!</Link>
        </Form>
        <ToastContainer/>
      </div>
  )
}

export default LogIn
