import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import theme from '../components/theme'

const Header = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/course">
                                <Nav.Link>Courses</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/roadmap">
                                <Nav.Link>RoadMap</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>

                        </Nav>
                        <Form className="d-flex">

                            <a class="btn1 btn-style" type="submit" href="/signup">
                                Sign Up
                            </a>

                            <a class="btn1 btn-style btn-style-border" type="submit" href="/login">
                                Log in
                            </a>


                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header
