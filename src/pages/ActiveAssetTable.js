import React, { Component } from 'react';

import { AppBar, Box, IconButton, Menu, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

import { ASSET_URL } from './../utils/Constants';
import { BaseTable } from './../components/Table/BaseTable';

class ActiveAssetTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assets: []
        }
    }

    componentDidMount() {
        const token = sessionStorage.getItem("jwt");

        fetch(
            ASSET_URL,
            {
                headers: {"Authorization": token}
            }
        )
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ assets: responseData });
            })
            .catch(err => console.error(err));
    }

    render() {
        const tableColumns = [
            {
                Header: "Asset Tag",
                accessor: "assetTag"
            },
            {
                Header: "Asset Type",
                accessor: "type"
            },
            {
                Header: "Manufacturer",
                accessor: "manufacturer"
            },
            {
                Header: "Model",
                accessor: "model"
            }
        ];

        const data = this.state.assets;

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
                            onClick={ this.onBackButtonClick } >
                                <MenuIcon />
                        </IconButton>
                        <Menu>

                        </Menu>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Active Assets
                        </Typography>
                    </Toolbar>
                </AppBar>
                <BaseTable columns={tableColumns} data={this.state.assets} />
            </Box>
        );
    }
};

export default ActiveAssetTable;