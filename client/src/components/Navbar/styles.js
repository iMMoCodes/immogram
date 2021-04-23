import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

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
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '400px',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	button: {
		margin: '0 5px',
		color: 'white',
	},
	// Responsiveness
	[theme.breakpoints.down('sm')]: {
		appBar: {
			flexDirection: 'column',
		},
		toolbar: {
			width: '100%',
			justifyContent: 'space-around',
		},
	},
}))

export const loginTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#00bcd4',
		},
		secondary: {
			main: '#009688',
		},
	},
})
