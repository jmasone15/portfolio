import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import picture from "../images/Profile Picture.jpg"


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
        <Jumbotron fluid style={theme ? lightStyle : darkStyle}>
            <Row style={{ justifyContent: "center" }}>
                <h1 style={{ fontSize: "75px" }}>Jordan Masone</h1>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <h4>Full-Stack Web Developer</h4>
            </Row>
            <br />
            <Row style={{ justifyContent: "center" }}>
                <Avatar alt="Jordan Masone" src={picture} className={classes.large} />
            </Row>
            <br /><br />
            <Row style={{ justifyContent: "center" }}>
                <h5>Welcome to my portfolio page!</h5>
            </Row>
        </Jumbotron >
    )
}
