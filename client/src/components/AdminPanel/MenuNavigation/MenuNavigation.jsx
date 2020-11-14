import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
		maxWidth: 360,
		backgroundColor: 'lightgray',
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export default function NestedList() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					Навигационное меню
				</ListSubheader>
			}
			className={classes.root}>
			<ListItem button>
				<ListItemText primary="Список постов" />
			</ListItem>
			<ListItem button>
				<ListItemText primary="Добавить новый пост" />
			</ListItem>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>
					<StarBorder />
				</ListItemIcon>
				<ListItemText primary="Посты" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Все посты" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<Link to="/admin/add-post">
							<ListItemText primary="Создать пост" />
						</Link>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemText primary="Редактировать пост" />
					</ListItem>
					<ListItem button className={classes.nested}>
						<Link to="/admin/delete-post">
							<ListItemText primary="Удалить пост" />
						</Link>
					</ListItem>
				</List>
			</Collapse>
		</List>
	);
}
