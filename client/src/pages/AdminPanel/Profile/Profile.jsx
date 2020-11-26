import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from './Tabs/Tabs.jsx';
import { SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary.dark,
    },

    images: {
        width: '100%',
    },

    background: {
        position: 'relative',
    },

    backgroundImg: {
        height: '150px',
        width: '100%',
        objectFit: 'cover',
    },

    avatar: {
        position: 'absolute',
        borderRadius: '50%',
        height: '100px',
        width: '100px',
        overflow: 'hidden',
        bottom: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        border: '3px solid white',
    },

    name: {
        marginTop: '50px',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '0.5em 0 0.5em 0',
    },

    profession: {
        padding: '0.5em 0 0.5em 0',
    },

    title: {
        padding: '0.5em 0 0.5em 0',
        color: theme.palette.text.secondary,
    },

    socials: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& ul': {
            listStyle: 'none',
            display: 'flex',
            paddingTop: '0.5em',

            '& li': {
                listStyle: 'none',
                margin: '0 0.5em',

                '& svg': {
                    height: '20px',
                    width: '20px',
                    transitionDuration: '0.3s',

                    '&:hover': {
                        cursor: 'pointer',
                        color: theme.palette.text.secondary,
                    },
                },
            },
        },
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <div>
                            <div className={classes.images}>
                                <div className={classes.background}>
                                    <img
                                        className={classes.backgroundImg}
                                        src="https://image.freepik.com/free-photo/retro-vintage-camera-and-photographic-film-on-wooden-background_1204-382.jpg"
                                        alt="profile"
                                    />
                                    <div className={classes.avatar}>
                                        <img
                                            src="https://sponzhik.ru/useruploads/foto/3946/avatar_ne_zagrugen__razmer_avatara_bolshe_150_px.jpg"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.name}>Mark Oprya</div>
                            <div className={classes.profession}>Frontend Developer</div>
                            <div className={classes.title}>
                                "Practice is the best of all instructors"
                            </div>
                            <div className={classes.socials}>
                                <ul>
                                    <li>Socials:</li>
                                    <li>
                                        <SiLinkedin />
                                    </li>
                                    <li>
                                        <SiInstagram />
                                    </li>
                                    <li>
                                        <FaFacebookSquare />
                                    </li>
                                    <li>
                                        <FaTwitterSquare />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Tabs />
                </Grid>
            </Grid>
        </div>
    );
}
