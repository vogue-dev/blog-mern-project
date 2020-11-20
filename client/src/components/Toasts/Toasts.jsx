import React, { useState, useEffect } from 'react';
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

    toast: {
        margin: theme.spacing(1.5),
        maxWidth: '400px',
    },
}));

export default function SimpleAlerts() {
    const classes = useStyles();
    const [toasts, setToasts] = useState([]);

    const createToast = () => {
        let newToast = {
            uid: (Math.floor(Math.random() * 100 + 1) * 1000 + new Date() / 1000) | 0,
            variant: 'filled',
            severity: 'success',
            onClose: 'activate',
            text: `${Math.floor(Math.random() * 100 + 1)} his is a success alert — check it out!`,
        };

        setToasts([...toasts, newToast]);
        let timerId = setTimeout(() => deleteToast(newToast.uid, timerId), 1000);
    };

    const deleteToast = (toast_id, timerId) => {
        let arr = toasts.filter((n) => n.uid !== toast_id);
        console.log('arr', arr);

        setToasts(arr);
        clearInterval(timerId);
    };

    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <div className={classes.root}>
            {console.log(toasts)}

            <button onClick={createToast}>Create toast</button>
            {toasts.map(({ uid, variant, severity, text }) => (
                <Alert
                    variant={variant}
                    severity={severity}
                    onClose={() => {
                        deleteToast(uid);
                    }}
                    className={classes.toast}
                    key={uid}>
                    {text}
                </Alert>
            ))}

            {/* <Alert variant="filled" severity="error">
                This is an error alert — check it out!
            </Alert>
            <Alert variant="filled" severity="warning">
                This is a warning alert — check it out!
            </Alert>
            <Alert variant="filled" severity="info">
                This is an info alert — check it out!
            </Alert> */}

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
