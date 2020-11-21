import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
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

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            section: 'europe',
            title: '',
            titleStatus: 'default',
            price: null,
            description: '',
            // publicationDate: '',
            readingTime: null,
            image: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(10, 'Title must be longer than 10 characters')
                .required('Enter Title'),
            price: Yup.number()
                .min(1, 'Price must be min 1 euro')
                .max(3000, 'Price must be max 3000 euro')
                .required('Enter Price'),
            description: Yup.string()
                .min(10, 'Title must be longer than 10 characters')
                .required('Enter Description'),
            readingTime: Yup.number()
                .min(1, 'Reading Time must be minimum 1 minute')
                .max(10, 'Reading Time must be maximum 10 minutes')
                .required('Enter Reading Time'),
            image: Yup.string()
                .matches(
                    /((http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png))/,
                    'Please enter http or https link to .png or .jpg file'
                )
                .required('Please enter http or https link to .png or .jpg file'),
        }),
        onSubmit: (values) => {
            alert('Login success!', values);
            axios.post(`${baseUrl}/${values.section}`, values);
        },
    });

    return (
        <>
            <Container component="main" maxWidth="xs">
                {console.log('values', values)}
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
                                name="section"
                                id="section"
                                label="В какой раздел публикуем ?"
                                value={values.section}
                                error={touched.login && errors.login ? true : false}
                                onChange={handleChange}>
                                <MenuItem value={'europe'}>Europe</MenuItem>
                                <MenuItem value={'ukraine'}>Ukraine</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="title"
                            name="title"
                            label="Title"
                            variant="outlined"
                            margin="normal"
                            defaultValue={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.title && errors.title ? true : false}
                            helperText={touched.title && errors.title ? errors.title : ''}
                            fullWidth
                        />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">
                                Title and Price Status
                            </InputLabel>
                            <Select
                                name="titleStatus"
                                id="titleStatus"
                                label="Title and Price Status"
                                value={values.titleStatus}
                                onChange={handleChange}>
                                <MenuItem value={'default'}>Default</MenuItem>
                                <MenuItem value={'success'}>Green</MenuItem>
                                <MenuItem value={'warning'}>Yellow</MenuItem>
                                <MenuItem value={'danger'}>Red</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="price"
                            name="price"
                            label="Price"
                            type="number"
                            variant="outlined"
                            margin="normal"
                            defaultValue={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.price && errors.price ? true : false}
                            helperText={touched.price && errors.price ? errors.price : ''}
                            fullWidth
                        />
                        <TextField
                            id="description"
                            name="description"
                            label="Description"
                            variant="outlined"
                            margin="normal"
                            defaultValue={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.description && errors.description ? true : false}
                            helperText={
                                touched.description && errors.description ? errors.description : ''
                            }
                            fullWidth
                            multiline
                            rows={3}
                        />
                        {/* <TextField
                            error={touched.login && errors.login ? true : false}
                            defaultValue={values.publicationTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.login && errors.login ? errors.login : ''}
                            variant="outlined"
                            margin="normal"
                            type="number"
                            id="publicationDate"
                            label="Publication Date"
                            name="publicationDate"
                            fullWidth
                        /> */}
                        <TextField
                            id="readingTime"
                            name="readingTime"
                            type="number"
                            label="Reading time"
                            variant="outlined"
                            margin="normal"
                            defaultValue={values.readingTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.readingTime && errors.readingTime ? true : false}
                            helperText={
                                touched.readingTime && errors.readingTime ? errors.readingTime : ''
                            }
                            fullWidth
                        />
                        <TextField
                            id="image"
                            name="image"
                            label="Link to image"
                            variant="outlined"
                            margin="normal"
                            defaultValue={values.image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.image && errors.image ? true : false}
                            helperText={touched.image && errors.image ? errors.image : ''}
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
