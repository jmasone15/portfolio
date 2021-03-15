import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import StyleIcon from '@material-ui/icons/Style';
import StorageIcon from '@material-ui/icons/Storage';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SkillsList({ theme }) {

    const classes = useStyles();
    const lightStyle = { backgroundColor: "#ffffff" };
    const darkStyle = { backgroundColor: "#343a40" };
    const lightTextStyle = { color: "#000000" };
    const darkTextStyle = { color: "#ffffff" };
    const lightIconStyle = { color: "#6c757d" };
    const darkIconStyle = { color: "#ffffff" };

    return (
        <div className={classes.root} style={theme ? lightStyle : darkStyle}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <CodeIcon style={theme ? lightIconStyle : darkIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="HTML" style={theme ? lightTextStyle : darkTextStyle} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StyleIcon style={theme ? lightIconStyle : darkIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="CSS" style={theme ? lightTextStyle : darkTextStyle} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionIcon style={theme ? lightIconStyle : darkIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="JavaScript" style={theme ? lightTextStyle : darkTextStyle} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StorageIcon style={theme ? lightIconStyle : darkIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Backend JS" style={theme ? lightTextStyle : darkTextStyle} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DesktopWindowsIcon style={theme ? lightIconStyle : darkIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="React" style={theme ? lightTextStyle : darkTextStyle} />
                </ListItem>
            </List>
        </div>
    )
}
