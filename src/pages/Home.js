import React, {Component, useEffect, useState} from 'react';

import './styles/Home.css';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Routes, Route, Link } from 'react-router-dom';

import {SERVER_URL} from '../utils/Constants';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { ListSubheader } from '@mui/material';

export default function Home() {
    const [state, setState] = useState({
        drawerOpen: false
    });

    const toggleDrawer = (open) => (event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, drawerOpen: open })
    }

    const drawerList = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="div"
                subheader={
                    <ListSubheader component="div">
                        Databases
                    </ListSubheader>
                }
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Active Assets" />
                    </ListItemButton>
                </ListItem> 
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Users" /> 
                    </ListItemButton> 
                </ListItem>   
            </List>    
        </Box>
    );

    return(
        <Box sx={{ flexGrow: 1 }}>
            <header>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="Main Menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={state.drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {drawerList()}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </header>
            <body>

            </body>
        </Box>
    );
}

/*
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userFirstName: "",
            userLastName: "",
            userIsAdmin: "",
            menuDrawerOpen: false
        }

        const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    }

    componentDidMount() {
        this.getUserDetails();
    }

    getUserDetails() {
        const token = sessionStorage.getItem("jwt");
        fetch(
            SERVER_URL + "/loginUsers/search/findByUsername?username=" + sessionStorage.getItem("username"),
            {
                headers: {"Authorization": token}
            }
        ).then((response) => response.json())
        .then((responseData) => {
            if(responseData.firstName !== null) {
                this.setState({userFirstName: responseData.firstName});
                console.log(this.state.userFirstName);
            }
        }).catch((error) => console.error(error));
    }

    setIsDrawerOpen(isDrawerOpen) {
        this.setState({ menuDrawerOpen: {isDrawerOpen} })
    }

    render() {
        const activeAssets = [
            {

            }
        ];

        return(
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={this.setIsDrawerOpen(true)} >
                                <MenuIcon />
                        </IconButton>
                        <Drawer
                            open={ this.isDrawerOpen } 
                            onClose={ () => this.setIsDrawerOpen(false) }
                        >

                        </Drawer>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Asset Register - Welcome { this.state.userFirstName }
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <Grid container spacing={2} xs={{margin: 10}} >
                    <Grid item xs={ 4 } >
                        <BasicCard
                            title="Asset Database"
                            body="Active Assets: "
                        />
                    </Grid>
                    <Grid item xs={ 4 } >
                        <BasicCard
                            title="Asset Database"
                            body={
                                <Link to="/active-asset-table">Active Database</Link>
                            }
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
};

export default Home;*/