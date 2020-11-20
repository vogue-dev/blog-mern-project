import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AddPost from './Posts/AddPost';
import DeletePost from './Posts/DeletePost';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    adminPanel: {
        display: 'flex',
        height: '100%',
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
}));

const AdminPanel = () => {
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
                        <Typography variant="h6" noWrap>
                            Admin Panel
                        </Typography>
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
                            <ListItem
                                button
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 1}
                                onClick={(event) => handleListItemClick(event, 1)}>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 2 || selectedIndex === 3}
                                onClick={handleCollapse}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Посты" />
                                {openCollapse ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
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
                                    <ListItemText primary="Login" />
                                </ListItem>
                            </Link>
                            <Link to="/">
                                <ListItem
                                    button
                                    selected={selectedIndex === 5}
                                    onClick={(event) => handleListItemClick(event, 5)}>
                                    <ListItemText primary="Home" />
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
                        <Route path="/admin/add-post" component={AddPost} />
                        <Route path="/admin/delete-post" component={DeletePost} />
                    </Switch>
                    <Typography paragraph>
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
                    </Typography>
                </main>
            </div>
        </>
    );
};

export default AdminPanel;
