import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const Header = () => {
    const header = {
        backgroundColor: "#e3f2fd",
        position: "fixed",
        width: "100%",
        zIndex: '2'
        // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
        // boxShadow: 'rgb(236 240 241) 0px 20px 27px 7px'
    };
    const navlink = {
        textDecoration: 'none',
        color: 'rgba(0,0,0,.55)',
        padding: '7px',
        // color: 'black'
    
        
    };

    return (
        <>
         <Navbar style={header} expand="lg">
                <Container>
                    <Navbar.Brand to="/"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink style={navlink} to="/" className="link">Home</NavLink >
                            <NavLink style={navlink} to="/about" className="link">About</NavLink >


                            <NavDropdown title="Crash Course" id="basic-nav-dropdown" className="link">
                                <NavDropdown.Item href="#action/3.1">Demo</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}

                            </NavDropdown>
                            <NavLink style={navlink} to="/contact" className="link">Contact Us</NavLink >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Header
