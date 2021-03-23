import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../components/Chart";
import Header from "../components/Header";
import ProjectsCard from "../components/ProjectsCard";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import picture from "../images/Profile Picture.jpg"
import Badge from "../components/Badge";

export default function HomePage({ theme }) {

    const lightTextStyle = { color: "#000000", textAlign: "center" };
    const darkTextStyle = { color: "#ffffff", textAlign: "center" };

    return (
        <Container fluid>
            <br /><br /><br /><br />
            <Row style={{ justifyContent: "center" }} id="home">
                <Header theme={theme} />
            </Row>
            <br /><br /><br /><br /><br /><br />
            <Row style={{ justifyContent: "center" }} id="skills">
                <div style={theme ? lightTextStyle : darkTextStyle}>
                    <h1><u>My Skills</u></h1>
                </div>
            </Row>
            <br />
            <Row style={{ justifyContent: "center" }}>
                <Col sm={3} >
                    <Skills theme={theme} />
                </Col>
                <Col sm={5}>
                    <Chart theme={theme} />
                </Col>
            </Row>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <Row style={{ justifyContent: "center" }} id="projects">
                <div style={theme ? lightTextStyle : darkTextStyle}>
                    <h1><u>My Projects</u></h1>
                </div>
            </Row>
            <br />
            <Row style={{ justifyContent: "center" }}>
                <Col sm={7}>
                    <ProjectsCard theme={theme} />
                </Col>
            </Row>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <Container style={{ marginBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }} id="aboutMe">
                    <div style={theme ? lightTextStyle : darkTextStyle}>
                        <h1><u>About Me</u></h1>
                    </div>
                </Row>
                <br />
                <Row style={{ justifyContent: "center" }}>
                    <Col sm={7}>
                        <AboutMe theme={theme} />
                    </Col>
                    <Col sm={5}>
                        <img alt="Jordan Masone" src={"http://www.simpleimageresizer.com/_uploads/photos/c094fbcc/Profile_Picture_350x350.jpg"} />
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
