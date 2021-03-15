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
                            <Button variant={theme ? "primary" : "dark"} onClick={(e) => handleThemeSwitch(e)}>Switch Theme</Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}
