import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: '20px',
		margin: '20px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0px 30px',
		backgroundColor: 'transparent',
	},
	heading: {
		color: '#bdbdbd',
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
	},
}))
