import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

export default function Footer({ theme }) {

    const linkStyle = { color: "#FFFFFF", fontSize: "20px" };
    const navStyle = { backgroundColor: "#17a2b8", textAlign: "right" };
    const darkNavStyle = { backgroundColor: "#284B63" };
    const darkLinkStyle = { color: "#D9D9D9", fontSize: "20px" };

    const handleBtn = (e, link) => {
        e.preventDefault();
        window.open(link);
    }

    return (
        <Navbar style={theme ? navStyle : darkNavStyle} sticky="bottom">
            <Nav>
                <Nav.Link onClick={(e) => handleBtn(e, "https://github.com/jmasone15")} style={theme ? linkStyle : darkLinkStyle}>
                    Github
                </Nav.Link>
                <Nav.Link onClick={(e) => handleBtn(e, "https://www.linkedin.com/in/jordan-masone-537943200/")} style={theme ? linkStyle : darkLinkStyle}>
                    LinkedIn
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
