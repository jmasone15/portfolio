import React from 'react';
import Project from "./Project";
import projects from "./data/projectArray";
import { Card, Tab, Row, Col, Container, ListGroup } from "react-bootstrap";

export default function ProjectsCard({ theme }) {

    const lightStyle = { backgroundColor: "#ffffff" };
    const darkStyle = { backgroundColor: "#343a40" };
    const lightTextStyle = { color: "#000000", textAlign: "center" };
    const darkTextStyle = { color: "#ffffff", textAlign: "center" };

    return (
        <Card style={theme ? lightStyle : darkStyle}>
            <Card.Body>
                <div style={theme ? lightTextStyle : darkTextStyle}>
                </div>
                <br /><br />
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                {projects.map((p) => (
                                    <ListGroup.Item action variant={theme ? "info" : "dark"} key={p.id} href={`#link${p.name}`}>
                                        {p.name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                {projects.map((p) => (
                                    <Tab.Pane eventKey={`#link${p.name}`} key={p.id}>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Project
                                                        title={p.name}
                                                        img={p.img}
                                                        description={p.description}
                                                        github={p.github}
                                                        deploy={p.deploy}
                                                        theme={theme}
                                                    />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Card.Body>
        </Card>
    )
}
