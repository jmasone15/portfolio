import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function AboutMe({ theme }) {

    const lightStyle = { backgroundColor: "#ffffff" };
    const darkStyle = { backgroundColor: "#343a40" };
    const lightTextStyle = { color: "#000000" };
    const darkTextStyle = { color: "#ffffff" };

    // Hopefully this works

    return (
        <Card style={theme ? lightStyle : darkStyle}>
            <CardActionArea>
                <CardContent style={theme ? lightTextStyle : darkTextStyle}>
                    <Typography gutterBottom variant="h3" component="h2">
                        Jordan Masone
                    </Typography>
                    <Typography style={theme ? lightTextStyle : darkTextStyle} variant="body1" color="textSecondary" component="p">
                        I am Orlando-based Full Stack Web Developer that focuses on React Development. I am a looking for all types of work and any freelance jobs I can find. A little about myself, I am a huge video game fan (especially Nintendo) and I love watching Hockey. As a recent graduate of the UCF coding bootcamp, I have my ear to the ground for any work I could get. I want to gather all of the experience I can to be the best I can be.
                    </Typography>
                    <br />
                    <Typography style={theme ? lightTextStyle : darkTextStyle} variant="body1" color="textSecondary" component="p">
                        Click the button below to email me.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="large" color={theme ? "secondary" : "primary"}>
                    <a href="mailto:jordanmasone1@gmail.com">Contact Me</a>
                </Button>
            </CardActions>
        </Card>
    )
}
