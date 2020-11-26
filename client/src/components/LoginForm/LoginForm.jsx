import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { setAdmin } from '../../redux/actions/state.js';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.primary.main,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 20px',
    },
}));

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .min(5, 'Login must be longer than 5 characters')
                .required('Enter Login'),
            password: Yup.string()
                .min(5, 'Password must be longer than 5 characters')
                .required('Enter Password'),
        }),
        onSubmit: () => {
            dispatch(setAdmin(true, values.rememberMe));
            alert('Login success!');
            history.push('/admin/profile');
        },
    });

    // const onChangeRememberMe = (param, rememberMe) => {
    //     dispatch({ type: 'SET_REMEMBER_ME', payload: param });
    // };

    return (
        <Container component="main" maxWidth="xs">
            {console.log('values', values)}
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in as Admin
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        error={touched.login && errors.login ? true : false}
                        defaultValue={values.login}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.login && errors.login ? errors.login : ''}
                        variant="outlined"
                        margin="normal"
                        id="login"
                        label="Login"
                        name="login"
                        fullWidth
                    />
                    <TextField
                        error={touched.password && errors.password ? true : false}
                        defaultValue={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.password && errors.password ? errors.password : ''}
                        variant="outlined"
                        margin="normal"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        fullWidth
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="rememberMe"
                                value="remember"
                                color="primary"
                                onChange={handleChange}
                            />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;
