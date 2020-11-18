import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    input: {
        '& > *': {
            marginBottom: '15px',
            width: '100%',
        },
    },
}));

const BasicTextFields = ({ label }) => {
    const classes = useStyles();

    return (
        <>
            <TextField className={classes.input} label={label} id="filled-basic" variant="filled" />
        </>
    );
};

export default BasicTextFields;
