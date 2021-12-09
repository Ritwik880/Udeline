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
        width: "100%"
    };
    const navlink = {
        textDecoration: 'none',
        color: 'rgba(0,0,0,.55)',
        padding: '7px'
    
        
    };
    return (
        <>
         <Navbar style={header} expand="lg">
                <Container>
                    <Navbar.Brand to="/"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink style={navlink} to="/">Home</NavLink >
                            <NavLink style={navlink} to="/about">About</NavLink >


                            <NavDropdown title="Crash Course" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Demo</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}

                            </NavDropdown>
                            <NavLink style={navlink} to="/contact">Contact Us</NavLink >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Header
