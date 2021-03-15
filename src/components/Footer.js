import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

export default function Footer({ theme }) {

    const linkStyle = { color: "#FFFFFF", fontSize: "20px" };
    const navStyle = { backgroundColor: "#3C6E71", textAlign: "right" };
    const darkNavStyle = { backgroundColor: "#284B63" };
    const darkLinkStyle = { color: "#D9D9D9", fontSize: "20px" }

    return (
        <Navbar style={theme ? navStyle : darkNavStyle} fixed="bottom">
            <Nav>
                <Nav.Link style={theme ? linkStyle : darkLinkStyle}>
                    Github
                </Nav.Link>
                <Nav.Link style={theme ? linkStyle : darkLinkStyle}>
                    LinkedIn
                </Nav.Link>
                <Nav.Link style={theme ? linkStyle : darkLinkStyle}>
                    Resume
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
