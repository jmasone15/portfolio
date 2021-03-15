import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import StyleModal from "./StyleModal";
import configs from "../components/backgroundConfig";

export default function NavBar({ theme, setTheme, setConfig }) {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const linkStyle = { color: "#FFFFFF", fontSize: "20px" };
    const darkLinkStyle = { color: "#D9D9D9", fontSize: "20px" };
    const navStyle = { backgroundColor: "#3C6E71" };
    const darkNavStyle = { backgroundColor: "#284B63" };

    const handleThemeSwitch = (e) => {
        e.preventDefault();

        if (theme === true) {
            setTheme(false);
            setConfig(configs.spaceConfig);
        } else {
            setTheme(true);
            setConfig(configs.defaultConfig);
        }
    }

    return (
        <div>
            {theme === true && (
                <Navbar style={navStyle} className="justify-content-center" sticky="top">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link style={linkStyle}>Home</Nav.Link>
                        <Nav.Link style={linkStyle}>Skills</Nav.Link>
                        <Nav.Link style={linkStyle}>Projects</Nav.Link>
                        <Nav.Link style={linkStyle}>About Me</Nav.Link>
                        <Nav.Link style={linkStyle} onClick={(e) => handleThemeSwitch(e)}>Theme</Nav.Link>
                    </Nav>
                </Navbar>)}
            {theme === false && (
                <Navbar style={darkNavStyle} className="justify-content-center">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link style={darkLinkStyle}>Home</Nav.Link>
                        <Nav.Link style={darkLinkStyle}>Skills</Nav.Link>
                        <Nav.Link style={darkLinkStyle}>Projects</Nav.Link>
                        <Nav.Link style={darkLinkStyle}>About Me</Nav.Link>
                        <Nav.Link style={darkLinkStyle} onClick={(e) => handleThemeSwitch(e)}>Theme</Nav.Link>
                    </Nav>
                </Navbar>)
            }
            <StyleModal
                show={showModal}
                setShow={setShowModal}
                handleClose={handleClose}
                theme={theme}
                setTheme={setTheme}
            />
        </div >
    )
}
