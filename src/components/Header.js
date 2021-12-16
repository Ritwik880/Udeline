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
        zIndex: '999'

    };
    const navlink = {
        textDecoration: 'none',
        color: 'rgba(0,0,0,.55)',
        // padding: '7px',
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
                            <NavLink style={navlink} to="/" className="link" activeClassName="active">Home</NavLink >
                            <NavLink style={navlink} to="/about" className="link">About</NavLink >
                            <NavLink style={navlink} to="/course" className="link">Courses</NavLink >
                            <NavLink style={navlink} to="/roadmap" className="link">RoadMap</NavLink >

                            {/* 
                            <NavDropdown title="Crash Course" id="basic-nav-dropdown" className="link">
                                <NavDropdown.Item to="/course">Explore Courses</NavDropdown.Item>


                            </NavDropdown> */}
                            <NavLink style={navlink} to="/contact" className="link">Contact Us</NavLink >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
