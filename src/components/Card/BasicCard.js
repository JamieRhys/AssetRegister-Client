import React, {Component} from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function BasicCard(props) {
    return(
        <Card sx={{ minWidth: 275, maxWidth: 350 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BasicCard;