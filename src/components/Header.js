import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import Avatar from '@material-ui/core/Avatar';
import Badge from "./Badge";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

const lightStyle = { color: "#000000", backgroundColor: "transparent" }
const darkStyle = { color: "#FFFFFF", backgroundColor: "transparent" }

export default function Header({ theme }) {

    const classes = useStyles();

    return (
        <Jumbotron style={theme ? lightStyle : darkStyle}>
            <Row style={{ justifyContent: "center" }}>
                <h1 style={{ fontSize: "75px" }}>Jordan Masone</h1>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <h4>Full-Stack Web Developer</h4>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <Badge />
            </Row>
            <br />
        </Jumbotron >
    )
}
