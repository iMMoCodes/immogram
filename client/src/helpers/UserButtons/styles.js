import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	buttons: {
		width: '180px',
		margin: '0 5px',
		color: 'white',
	},
	loginButton: {
		backgroundColor: '#00bcd4',
		'&:hover': {
			backgroundColor: '#00838f',
		},
	},
	signUpButton: {
		backgroundColor: '#009688',
		'&:hover': {
			backgroundColor: '#00695c',
		},
	},
	profileButton: {
		backgroundColor: '#673ab7',
		'&:hover': {
			backgroundColor: '#4527a0',
		},
	},
	createPostButton: {
		backgroundColor: '#4caf50',
		'&:hover': {
			backgroundColor: '#2e7d32',
		},
	},
	logoutButton: {
		backgroundColor: '#f44336',
		'&:hover': {
			backgroundColor: '#c62828',
		},
	},
	// XS
	[theme.breakpoints.down('xs')]: {
		toolbar: {
			flexDirection: 'column',
		},
		buttons: {
			margin: '2px 0',
		},
		logoutButton: {
			marginBottom: '15px',
		},
	},
}))
