import React, {Component} from 'react';

import './styles/Home.css';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';

import { Routes, Route, Link } from 'react-router-dom';

import {SERVER_URL} from '../utils/Constants';
import BasicCard from '../components/Card/BasicCard';
import ActiveAssetTable from './ActiveAssetTable';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userFirstName: "",
            userLastName: "",
            userIsAdmin: "",
            menuAppBarOpen: false
        }
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

    handleAppBarMenu = event => {
        this.setState({menuAppBarOpen: event.currentTarget})
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
                            onClick={this.handleAppBarMenu} >
                                <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            open={this.menuAppBarOpen}
                            onClose={this.handleAppBarMenu} >

                        </Menu>
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

export default Home;