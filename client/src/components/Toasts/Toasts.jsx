import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 1050,
        width: '400px',
    },

    badge: {
        margin: theme.spacing(1.5),
        maxWidth: '400px',
    },
}));

export default function SimpleAlerts() {
    const classes = useStyles();
    const [toasts, setToasts] = useState([
        {
            id: 0,
            variant: 'filled',
            severity: 'success',
            onClose: 'activate',
            text: '1 This is a success alert — check it out!',
        },
        {
            id: 1,
            variant: 'filled',
            severity: 'success',
            onClose: 'activate',
            text: '2 This is a success alert — check it out!',
        },
        {
            id: 2,
            variant: 'filled',
            severity: 'success',
            onClose: 'activate',
            text: '3 This is a success alert — check it out!',
        },
    ]);

    const createToast = (current_index) => {
        console.log(current_index);
        deleteToast(current_index);
    };

    const deleteToast = (current_index) => {
        var removed = toasts.splice(current_index, 1);
        setToasts(removed);
    };

    return (
        <div className={classes.root}>
            {/* <Alert variant="filled" severity="error">
                This is an error alert — check it out!
            </Alert>
            <Alert variant="filled" severity="warning">
                This is a warning alert — check it out!
            </Alert>
            <Alert variant="filled" severity="info">
                This is an info alert — check it out!
            </Alert> */}
            {console.log(toasts)}
            {toasts.map(({ id, variant, severity, text }, i) => (
                <Alert
                    variant={variant}
                    severity={severity}
                    onClose={(i) => {
                        deleteToast(i);
                    }}
                    className={classes.badge}
                    key={id}>
                    {text}
                </Alert>
            ))}

            {/* <Alert
                variant="filled"
                severity="success"
                onClose={() => {
                    createToast();
                }}
                className={classes.badge}>
                ЗАПУСК
            </Alert>

            <Alert variant="filled" severity="warning" onClose={() => {}} className={classes.badge}>
                This is a success alert — check it out!
            </Alert>
            <Alert variant="filled" severity="success" onClose={() => {}} className={classes.badge}>
                This is a success alert — check it out!
            </Alert> */}
        </div>
    );
}
