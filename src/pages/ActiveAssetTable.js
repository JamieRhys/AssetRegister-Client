import React, { Component } from 'react';

import { AppBar, Box, IconButton, Menu, Toolbar, Typography } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack'

class ActiveAssetTable extends Component {
    render() {
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
                            onClick={this.goBack} >
                                <ArrowBack />
                        </IconButton>
                        <Menu>

                        </Menu>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Active Assets
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
};

export default ActiveAssetTable;