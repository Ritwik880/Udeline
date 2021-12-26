import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Modal, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import theme from '../components/theme'

const Header = () => {
    
    const header = {
        
        position: "fixed",
        width: "100%",
        zIndex: '999'

    };
    const navlink = {
        textDecoration: 'none',
        // color: 'rgba(0,0,0,.55)',
    };

    function themeToggler() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <>

            {/* <ThemeProvider theme={themes[theme]}> */}
            <Navbar className='main-header' expand="lg">
                <Container>
                    <Navbar.Brand to="/"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <NavLink style={navlink} to="/" className="link" activeClassName="active">Home</NavLink >
                            <NavLink style={navlink} to="/about" className="link">About</NavLink >
                            <NavLink style={navlink} to="/course" className="link">Courses</NavLink >
                            <NavLink style={navlink} to="/roadmap" className="link">RoadMap</NavLink >
                            <NavLink style={navlink} to="/contact" className="link">Contact Us</NavLink >

                        </Nav>
                        <Form className="d-flex">

                            <button class="btn1 btn-style" type="submit">
                                Sign Up
                            </button>
                            <button class="btn1 btn-style btn-style-border" type="submit">
                                Log in
                            </button>


                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div className="card-header text-center">
                <h2 className="display-3">Our Team</h2>
            </div> */}
          


        </>
    );
}

export default Header
