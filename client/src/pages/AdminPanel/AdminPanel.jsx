import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddPost from './Posts/AddPost';
import DeletePost from './Posts/DeletePost';
import EuropePosts from './Posts/EuropePosts';
import UkrainePosts from './Posts/UkrainePosts';
import Profile from './Profile/Profile.jsx';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import {
    makeStyles,
    useTheme,
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Button,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    palette: {
        primary: {
            main: 'purple[500]',
        },
        secondary: {
            main: 'green[500]',
        },
    },

    adminPanel: {
        display: 'flex',
        height: '100%',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        },
    },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    adminText: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    logoutButton: {
        backgroundColor: theme.palette.background.paper,

        '&: hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}));

const AdminPanel = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [openCollapse, setOpenCollapse] = React.useState(true);

    const handleCollapse = () => {
        setOpenCollapse(!openCollapse);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () => {
        if (window.confirm('Are you shure?') === true) {
            dispatch({ type: 'SET_LOGIN', payload: { isAdmin: false, rememberMe: false } });
        }
    };
    return (
        <>
            <div className={classes.adminPanel}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.adminText}>
                            <Typography variant="h6" noWrap>
                                Admin Panel
                            </Typography>
                        </div>
                        <Button className={classes.logoutButton} onClick={logout}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.list}>
                        <List component="nav" aria-label="main mailbox folders">
                            <Link to="/admin/profile">
                                <ListItem
                                    button
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Мой профиль" />
                                </ListItem>
                            </Link>
                            {/* <ListItem
                                button
                                selected={selectedIndex === 1}
                                onClick={(event) => handleListItemClick(event, 1)}>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItem> */}
                            <ListItem
                                button
                                selected={
                                    selectedIndex === 2 ||
                                    selectedIndex === 3 ||
                                    selectedIndex === 10 ||
                                    selectedIndex === 11
                                }
                                onClick={handleCollapse}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Посты" />
                                {openCollapse ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <Link to="/admin/europe-posts">
                                        <ListItem
                                            button
                                            className={classes.nested}
                                            selected={selectedIndex === 10}
                                            onClick={(event) => handleListItemClick(event, 10)}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Все Europe" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/admin/ukraine-posts">
                                        <ListItem
                                            button
                                            className={classes.nested}
                                            selected={selectedIndex === 11}
                                            onClick={(event) => handleListItemClick(event, 11)}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Все Ukraine" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/admin/add-post">
                                        <ListItem
                                            button
                                            className={classes.nested}
                                            selected={selectedIndex === 2}
                                            onClick={(event) => handleListItemClick(event, 2)}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Создать" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/admin/delete-post">
                                        <ListItem
                                            button
                                            className={classes.nested}
                                            selected={selectedIndex === 3}
                                            onClick={(event) => handleListItemClick(event, 3)}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Удалить" />
                                        </ListItem>
                                    </Link>
                                </List>
                            </Collapse>
                        </List>
                        <Divider />
                        <List component="nav" aria-label="secondary mailbox folder">
                            <Link to="/login">
                                <ListItem
                                    button
                                    selected={selectedIndex === 4}
                                    onClick={(event) => handleListItemClick(event, 4)}>
                                    <ListItemText primary="to Login Page" />
                                </ListItem>
                            </Link>
                            <Link to="/">
                                <ListItem
                                    button
                                    selected={selectedIndex === 5}
                                    onClick={(event) => handleListItemClick(event, 5)}>
                                    <ListItemText primary="to Home" />
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}>
                    <div className={classes.drawerHeader} />
                    <Switch>
                        <Route path="/admin/profile" component={Profile} />
                        <Route path="/admin/add-post" component={AddPost} />
                        <Route path="/admin/delete-post" component={DeletePost} />
                        <Route path="/admin/europe-posts" component={EuropePosts} />
                        <Route path="/admin/ukraine-posts" component={UkrainePosts} />
                    </Switch>
                    {/* <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
                        morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
                        bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
                        commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                        vivamus at augue. At augue eget arcu dictum varius duis at consectetur
                        lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                        faucibus et molestie ac.
                    </Typography> */}
                </main>
            </div>
        </>
    );
};

export default AdminPanel;
