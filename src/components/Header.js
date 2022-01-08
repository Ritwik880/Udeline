import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import theme from '../components/theme'

const Header = () => {



    const mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }

    }
    // When the user clicks on the button, scroll to the top of the document
   
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    return (
        <>
            <button onclick={topFunction} id="myBtn" title="Go to top">Top</button>
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
                        {/* <Form className="d-flex">

                            <a class="btn1 btn-style" type="submit" href="https://forms.gle/SHiEJRKcwEMDUwN1A">
                                Enroll Now
                            </a>


                        </Form> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header
