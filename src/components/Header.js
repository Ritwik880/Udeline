import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import theme from '../components/theme'

const Header = () => {
    window.onload = function () {


        const switchElement = document.querySelector('.switch')

        switchElement.addEventListener('click', () => {
            document.body.classList.toggle('dark')
        })
    }
    const header = {
        // backgroundColor: "#e3f2fd",
        backgroundColor: "#00cec9",
        position: "fixed",
        width: "100%",
        zIndex: '999'

    };
    const navlink = {
        textDecoration: 'none',
        color: 'rgba(0,0,0,.55)',
    };

    function themeToggler() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }




    return (
        <>

            {/* <ThemeProvider theme={themes[theme]}> */}
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
                            <NavLink style={navlink} to="/contact" className="link">Contact Us</NavLink >

                        </Nav>
                        <Form className="d-flex">
                            <div class="switch">
                                <div class="flicker"></div>
                                <div class="moon"></div>
                            </div>

                            {/* <Button onClick={() => themeToggler()} variant="outline-success">Toggle</Button> */}


                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* </ThemeProvider> */}


        </>
    );
}

export default Header
