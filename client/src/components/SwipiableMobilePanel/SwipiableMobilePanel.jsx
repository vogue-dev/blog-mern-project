import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const links = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'По Европе',
        link: '/europe',
    },
    {
        text: 'По Украине',
        link: '/ukraine',
    },
    {
        text: 'Новости',
        link: '/news',
    },
    {
        text: 'Блог',
        link: '/blog',
    },
];

const adminLinks = [
    {
        text: 'My Profile',
        link: '/admin/profile',
    },
    {
        text: 'Login',
        link: '/login',
    },
];

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const swipiableMobilePanel = useSelector(({ state }) => state.swipiableMobilePanel);

    const toggleDrawer = () => {
        dispatch({ type: 'SET_SWIPABLE_MOBILE_PANEL', payload: !swipiableMobilePanel });
    };

    const list = () => (
        <div className={classes.list} role="presentation">
            <ListItem>LOGO</ListItem>
            <Divider />
            <List>
                {links.map(({ text, link }, index) => (
                    <Link to={link} key={index}>
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {adminLinks.map(({ text, link }, index) => (
                    <Link to={link} key={index}>
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <Button onClick={() => toggleDrawer(true)}>{'left'}</Button>
                <SwipeableDrawer
                    anchor={'left'}
                    open={swipiableMobilePanel}
                    onClose={() => toggleDrawer(false)}
                    onOpen={() => toggleDrawer(true)}>
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
