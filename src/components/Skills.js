import React from "react";
import SkillsList from "./SkillsList";
import { Card } from "react-bootstrap";

export default function Skills({ theme }) {

    const lightStyle = { backgroundColor: "#ffffff" };
    const darkStyle = { backgroundColor: "#343a40" };
    const lightTextStyle = { color: "#000000", textAlign: "center" };
    const darkTextStyle = { color: "#ffffff", textAlign: "center" };

    return (
        <div>
            <Card style={theme ? lightStyle : darkStyle}>
                <Card.Body>
                    <div style={theme ? lightTextStyle : darkTextStyle}>
                        <h3>My Proficient Skills:</h3>
                    </div>
                    <br /><br />
                    <SkillsList theme={theme} />
                </Card.Body>
            </Card>
        </div>
    )
}
