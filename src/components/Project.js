import React from 'react';
import { Card, Button } from "react-bootstrap";

export default function Project(props) {

    const lightStyle = { backgroundColor: "#ffffff" };
    const darkStyle = { backgroundColor: "#343a40", borderColor: "#ffffff" };
    const lightTextStyle = { color: "#000000" };
    const darkTextStyle = { color: "#ffffff" };

    const handleBtn = (e, link) => {
        e.preventDefault();

        window.open(link);
    }

    return (
        <div>
            <Card style={props.theme ? lightStyle : darkStyle}>
                <Card.Body style={props.theme ? lightTextStyle : darkTextStyle}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <div style={{ textAlign: "center" }}>
                        <Button variant={props.theme ? "info" : "secondary"} onClick={(e) => handleBtn(e, props.deploy)}>Website</Button>
                        <Button variant={props.theme ? "info" : "secondary"} onClick={(e) => handleBtn(e, props.github)} style={{ marginLeft: "30px" }}>Github Repo</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
