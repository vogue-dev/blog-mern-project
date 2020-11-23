import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from './Tabs/Tabs.jsx';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    images: {
        width: '100%',
    },

    backgroundImg: {
        position: 'relative',
        maxHeight: '200px',
        width: '100%',
        objectFit: 'cover',
    },

    avatar: {
        position: 'absolute',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
    },
    name: {
        marginTop: '50px',
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
                                <div class={classes.backgroundImg}>
                                    <img
                                        src="https://image.freepik.com/free-photo/retro-vintage-camera-and-photographic-film-on-wooden-background_1204-382.jpg"
                                        alt="profile"
                                    />
                                </div>
                                <div className={classes.avatar}>
                                    <img
                                        src="https://sponzhik.ru/useruploads/foto/3946/avatar_ne_zagrugen__razmer_avatara_bolshe_150_px.jpg"
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                            <div className={classes.name}>NAME</div>
                            <div>profession</div>
                            <div>title</div>
                            <div>
                                socials
                                <ul>
                                    <li>LinkedIn</li>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
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
