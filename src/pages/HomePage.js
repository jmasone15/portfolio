import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../components/Chart";
import Header from "../components/Header";
import Skills from "../components/Skills";

export default function HomePage({ theme }) {
    return (
        <Container fluid >
            <Row style={{ justifyContent: "center" }}>
                <Header theme={theme} />
            </Row>
            <br /><br /><br /><br /><br /><br />
            <Row style={{ justifyContent: "center" }}>
                <Col sm={3} >
                    <Skills theme={theme} />
                </Col>
                <Col sm={5}>
                    <Chart theme={theme} />
                </Col>
            </Row>
        </Container >
    )
}
