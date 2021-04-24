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
		width: '400px',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '20px',
		marginBottom: '10px',
	},
	loginButton: {
		margin: '0 5px',
		color: 'white',
		backgroundColor: '#00bcd4',
		'&:hover': {
			backgroundColor: '#00838f',
		},
	},
	signUpButton: {
		margin: '0 5px',
		color: 'white',
		backgroundColor: '#009688',
		'&:hover': {
			backgroundColor: '#00695c',
		},
	},
	// Responsiveness
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
		loginButton: {
			padding: '10px',
		},
		signUpButton: {
			padding: '10px',
		},
	},
}))
