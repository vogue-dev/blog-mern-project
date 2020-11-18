import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './modal.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 300,
            display: 'flex',
            marginBottom: 25,
        },
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const Modal = ({ onLogin }) => {
    const classes = useStyles();
    let [isActive, setIsActive] = useState(false);

    // const onLogin = (e) => {
    //     e.preventDefault();
    //     console.log('zakrili');
    // };

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <div className={isActive ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <div className="modal__title">Введите Login, Password</div>
                <div className="modal__body">
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={onLogin}>
                        <div>
                            <TextField id="filled-basic" label="Login" variant="filled" />
                            <TextField id="filled-basic" label="Password" variant="filled" />
                        </div>
                        <div className={classes.button}>
                            <Button type="submit" variant="contained">
                                Войти
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
