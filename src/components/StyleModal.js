import React from "react";
import { Modal, Button, Dropdown, Container, Row, Col } from "react-bootstrap";

export default function StyleModal({ show, handleClose, theme, setTheme, setBackground }) {

    const handleThemeSwitch = (e) => {
        e.preventDefault();

        if (theme === true) {
            setTheme(false)
        } else {
            setTheme(true)
        }
    }

    const handleBackground = (e, value) => {
        e.preventDefault();
        setBackground(value);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Style Customizer</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant={theme ? "primary" : "dark"} id="dropdown-basic">
                                    Change Background
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "ball")}>Ball</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "lines")}>Lines</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "thick")}>Thick</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "circle")}>Circle</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "cobweb")}>CobWeb</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "polygon")}>Polygon</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "square")}>Square</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "fountain")}>Fountain</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handleBackground(e, "random")}>Random</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Button variant={theme ? "primary" : "dark"} onClick={(e) => handleThemeSwitch(e)}>Switch Theme</Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}
