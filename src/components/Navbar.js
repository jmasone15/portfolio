import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar({ theme, setTheme }) {

    const linkStyle = { color: "#FFFFFF", fontSize: "20px" };
    const darkLinkStyle = { color: "#D9D9D9", fontSize: "20px" }
    const navStyle = { backgroundColor: "#3C6E71" };
    const darkNavStyle = { backgroundColor: "#284B63" };

    const switchTheme = (e) => {
        e.preventDefault(e);
        if (theme === true) {
            setTheme(false);
        } else {
            setTheme(true)
        }
    }

    return (
        <div>
            {theme === true && (
                <Navbar style={navStyle} className="justify-content-center">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link style={linkStyle}>Home</Nav.Link>
                        <Nav.Link style={linkStyle}>Skills</Nav.Link>
                        <Nav.Link style={linkStyle}>Projects</Nav.Link>
                        <Nav.Link style={linkStyle}>About Me</Nav.Link>
                        <Nav.Link style={linkStyle} onClick={(e) => switchTheme(e)}>Theme</Nav.Link>
                    </Nav>
                </Navbar>)}
            {theme === false && (
                <Navbar style={darkNavStyle} className="justify-content-center">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link style={darkLinkStyle}>Home</Nav.Link>
                        <Nav.Link style={darkLinkStyle}>Skills</Nav.Link>
                        <Nav.Link style={darkLinkStyle}>Projects</Nav.Link>
                        <Nav.Link style={darkLinkStyle}>About Me</Nav.Link>
                        <Nav.Link style={darkLinkStyle} onClick={(e) => switchTheme(e)}>Theme</Nav.Link>
                    </Nav>
                </Navbar>)}
        </div>
    )
}
