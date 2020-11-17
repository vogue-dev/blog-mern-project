import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

const ButtonCustom = ({ text }) => {
	const classes = useStyles();

	return (
		<Button variant="contained" size="large" color="primary" className={classes.margin}>
			{text}
		</Button>
	);
};

export default ButtonCustom;
