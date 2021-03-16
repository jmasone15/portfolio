import React, { useState, useRef } from "react";
import { Nav, Navbar } from "react-bootstrap";
import StyleModal from "./StyleModal";
import configs from "./data/backgroundConfig";
import Switch from '@material-ui/core/Switch';

export default function NavBar({ theme, setTheme, setConfig, scroll, myRef }) {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const linkStyle = { color: "#FFFFFF", fontSize: "20px" };
    const darkLinkStyle = { color: "#D9D9D9", fontSize: "20px" };
    const navStyle = { backgroundColor: "#17a2b8" };
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
                <Navbar style={navStyle} className="justify-content-center" fixed="top">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link style={linkStyle} href="#home">Home</Nav.Link>
                        <Nav.Link style={linkStyle} href="#skills">Skills</Nav.Link>
                        <Nav.Link style={linkStyle} href="#projects">Projects</Nav.Link>
                        <Nav.Link style={linkStyle} href="#aboutMe">About Me</Nav.Link>
                        <Switch
                            checked={!theme}
                            onChange={(e) => handleThemeSwitch(e)}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Nav>
                </Navbar>)}
            {theme === false && (
                <Navbar style={darkNavStyle} className="justify-content-center" fixed="top">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link style={darkLinkStyle} href="#home">Home</Nav.Link>
                        <Nav.Link style={darkLinkStyle} href="#skills">Skills</Nav.Link>
                        <Nav.Link style={darkLinkStyle} href="#projects">Projects</Nav.Link>
                        <Nav.Link style={darkLinkStyle} href="#aboutMe">About Me</Nav.Link>
                        <Switch
                            checked={!theme}
                            onChange={(e) => handleThemeSwitch(e)}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
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
