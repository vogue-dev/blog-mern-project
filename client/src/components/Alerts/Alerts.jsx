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
    // const [badges, setBadges] = useState([
    //     {
    //         id: 0,
    //         variant: 'filled',
    //         severity: 'success',
    //         onClose: 'activate',
    //         text: 'This is a success alert — check it out!',
    //     },
    //     {
    //         id: 1,
    //         variant: 'filled',
    //         severity: 'success',
    //         onClose: 'activate',
    //         text: 'This is a success alert — check it out!',
    //     },
    // ]);

    // const activate = (current_id) => {
    //     badges.map((number) => {
    //         number.id === current_id ? setBadges(badges.splice(current_id, 1)) : null;
    //     });
    // };

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
            {/* {console.log(badges)}
            {badges.map(({ id, variant, severity, text }) => (
                <Alert
                    variant={variant}
                    severity={severity}
                    onClose={(id) => {
                        activate(id);
                    }}
                    className={classes.badge}
                    key={id}>
                    {text}
                </Alert>
            ))} */}

            {/* <Alert variant="filled" severity="success" onClose={activate} className={classes.badge}>
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
