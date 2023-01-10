import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navigation() {
    const auth = localStorage.getItem('user');
    const result = JSON.parse(auth);
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear();
        navigate('/LogIn');
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className='borWhite'>
                <Container>
                    <Navbar.Brand href="/"><img className='logo' src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png' alt="LOGO"/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href='/' className='linkMenu'>Home</Nav.Link>
                            { result ? <>
                                         <Nav.Link onClick={logout} href="/LogIn"className='linkMenu' >LogOut</Nav.Link> 
                                         <Nav.Link href="#" className='linkMenu'> Welcome ( {result.data.name} )</Nav.Link>
                                        </>:
                                        <>
                                            <Nav.Link href="/login" className='linkMenu'>LogIn</Nav.Link>
                                            <Nav.Link href="/register" className='linkMenu'>Register</Nav.Link>
                                        </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
