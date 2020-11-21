import React, { useState, useRef } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { baseUrl } from '../../../utils/constants.js';

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

    formControl: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        minWidth: 120,
        width: '100%',
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddPost = () => {
    const classes = useStyles();
    let [state, setState] = useState({});
    let [selectType, setSelectType] = useState('europe');
    const select = useRef();
    const title = useRef();
    const titleStatus = useRef();
    const price = useRef();
    const description = useRef();
    const date = useRef();
    const readingTime = useRef();
    const image = useRef();
    const [age, setAge] = React.useState('');

    const handleSelect = (event) => {
        setAge(event.target.value);
    };

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .min(5, 'Login must be longer than 5 characters')
                .required('Enter Login'),
            password: Yup.string()
                .min(5, 'Password must be longer than 5 characters')
                .required('Enter Password'),
        }),
        onSubmit: ({ login, password }) => {
            alert('Login success!');
        },
    });

    const addValues = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
    };

    const addNewPost = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/${selectType}`, state);
    };

    const onClickSetSelectType = ({ target }) => {
        setSelectType(target.value);
    };

    return (
        <>
            <div>
                <select ref={select} value={selectType} onChange={onClickSetSelectType}>
                    <option value="europe">Europe Post</option>
                    <option value="ukraine">Ukraine Post</option>
                </select>
                <form className="fd-c" onSubmit={addNewPost} onChange={addValues}>
                    <input ref={title} name="title" placeholder="title"></input>
                    <input ref={titleStatus} name="titleStatus" placeholder="titleStatus"></input>
                    <input ref={price} name="price" placeholder="price"></input>
                    <input ref={description} name="description" placeholder="description"></input>
                    <input ref={date} name="date" placeholder="date"></input>
                    <input
                        ref={readingTime}
                        type="number"
                        name="readingTime"
                        placeholder="readingTime"></input>
                    <input
                        ref={image}
                        name="image"
                        placeholder="ссылка на картинку 16:9 (jpg/png)"></input>

                    <button>Подтвердить</button>
                </form>
            </div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography component="h1" variant="h5">
                        Создать новый пост
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">
                                В какой раздел публикуем ?
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleSelect}
                                label="Age">
                                <MenuItem value={'europe'}>Europe</MenuItem>
                                <MenuItem value={'ukraine'}>Ukraine</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            error={touched.login && errors.login ? true : false}
                            defaultValue={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.login && errors.login ? errors.login : ''}
                            variant="outlined"
                            margin="normal"
                            id="title"
                            label="Title"
                            name="title"
                            fullWidth
                        />
                        <TextField
                            error={touched.login && errors.login ? true : false}
                            defaultValue={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.login && errors.login ? errors.login : ''}
                            variant="outlined"
                            margin="normal"
                            id="title-status"
                            label="Title Status: ('success', 'danger', etc)"
                            name="title-status"
                            fullWidth
                        />
                        <TextField
                            error={touched.login && errors.login ? true : false}
                            defaultValue={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.login && errors.login ? errors.login : ''}
                            variant="outlined"
                            margin="normal"
                            type="number"
                            id="price"
                            label="Price"
                            name="price"
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
                            multiline
                            rows={3}
                            label="Description"
                            type="description"
                            id="description"
                            fullWidth
                        />
                        <TextField
                            error={touched.login && errors.login ? true : false}
                            defaultValue={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.login && errors.login ? errors.login : ''}
                            variant="outlined"
                            margin="normal"
                            type="number"
                            id="price"
                            label="Price"
                            name="price"
                            fullWidth
                        />
                        <TextField
                            error={touched.login && errors.login ? true : false}
                            defaultValue={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.login && errors.login ? errors.login : ''}
                            variant="outlined"
                            margin="normal"
                            type="number"
                            id="reading-time"
                            label="Reading time"
                            name="reading-time"
                            fullWidth
                        />
                        <TextField
                            error={touched.login && errors.login ? true : false}
                            defaultValue={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.login && errors.login ? errors.login : ''}
                            variant="outlined"
                            margin="normal"
                            id="image"
                            label="Link to image ('jpg' or 'png')"
                            name="image"
                            fullWidth
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Создать пост
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default AddPost;
