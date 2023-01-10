import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import countryData from '../Context';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cellnum, setCellnum] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [Country, setCountry] = useState();
  const [State, setState] = useState();
  const [City, setCity] = useState();
  const navigate = useNavigate();

  const country = useContext(countryData);

  const availableState = country.find((c) => c.name === Country);
  const availableCities = availableState?.states?.find((s) => s.name === State);

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth)
      navigate('/')
  })

  const collectData = async () => {
    console.log(name, cellnum, email, password, Country, State, City, desc, img);
    if (name === '' || cellnum === '' || email === '' || password === '' || Country === "" || State === '' || City === '' || desc === '' || img === '') {
      toast.error("Sorry! You Missed Something")
    }
    else {
      if ((cellnum.length === 13) && (cellnum.slice(0, 1) === "+")) {
        if (cellnum.slice(0, 3) === availableState.code) {
          try {
            const data = await axios.post('http://localhost:3500/home/users/signup', {
              name,
              cellnum,
              email,
              password,
              Country,
              State,
              City,
              desc,
              img
            });
            if (data) {
              toast.success("User Register Successfully");
              navigate('/');
              localStorage.setItem("user", JSON.stringify(data));
            }
            else {
              toast.error("emailId already exist");
            }
          } catch (error) {
            toast.error("emailId Already Exist");
          }
        }
        else {
          toast.error("Invalid Country code!");
        }
      }
      else {
        toast.error("Number is Invalid")
      }
    }
  }
  return (
    <>
      <div style={{ width: "40vw", height: "120vh", margin: "auto" }}>
        <Form style={{ border: "1px solid black", padding: "5% 10% 10% 10%", marginTop: "5%" }}>
          <h3 style={{ marginBottom: "5%" }}>Register</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" value={cellnum} onChange={(e) => setCellnum(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Select aria-label="Default select example" value={Country}
            onChange={(e) => setCountry(e.target.value)} style={{ margin: "3% 0%" }}>

            <option>Select Country</option>
            {country.map((value, key) => {
              return (
                <option value={value.name} key={key}>
                  {value.name}
                </option>
              );
            })}
          </Form.Select>

          <Form.Select aria-label="Default select example" value={State}
            onChange={(e) => setState(e.target.value)} style={{ margin: "3% 0%" }}>
            <option>Select State</option>
            {availableState?.states.map((e, key) => {
              return (
                <option value={e.name} key={key}>
                  {e.name}
                </option>
              );
            })}
          </Form.Select>

          <Form.Select aria-label="Default select example" value={City}
            onChange={(e) => setCity(e.target.value)} style={{ margin: "3% 0%" }}>
            <option>Select City</option>
            {availableCities?.cities.map((e, key) => {
              return (
                <option value={e.name} key={key}>
                  {e}
                </option>
              );
            })}
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" value={img} onChange={(e) => setImg(e.target.value)} />
          </Form.Group>

          <button className='register' onClick={collectData} type="button" >Register Now</button>
        </Form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
