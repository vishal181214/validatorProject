import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Admin from './components/Admin';
import { useEffect, useState } from 'react';
import ErrorPage from './components/ErrorPage';
import Country from './components/Country';
function App() {
  const [res, setResult] = useState();

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('user'));
    if(data !== null)
    {
      setResult(data.data.isAdmin);
    }
  },[]);
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/country' element={<Country/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        {
          (res) ? <Route path='/admin' element={<Admin/>}/>
                : <Route path='/' element={<Home/>}/>
        }
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
