import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import styled, { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "../components/theme";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
// const Header = () => {
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



const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
`;
function Header(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

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

                                {/* <Button onClick={() => themeToggler()} variant="outline-success">Toggle</Button> */}
                                <Toggle onClick={() => changeTheme()}>
                                    {icon}
                                </Toggle>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            {/* </ThemeProvider> */}


        </>
    );
}

export default Header
