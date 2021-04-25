import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '20px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0px 30px',
	},
	heading: {
		color: '#444444',
		textDecoration: 'none',
		fontFamily: "'Grand Hotel', cursive",
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '600px',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '20px',
		marginBottom: '10px',
	},
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
	// Responsiveness
	// SM
	[theme.breakpoints.down('sm')]: {
		appBar: {
			flexDirection: 'column',
		},
		brandContainer: {
			marginLeft: '0px',
		},
		toolbar: {
			width: '100%',
			justifyContent: 'space-around',
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
