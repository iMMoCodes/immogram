import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	mainContainer: {
		width: '100%',
	},
	header: {
		color: '#bdbdbd',
		fontFamily: "'Oswald' sans-serif",
		letterSpacing: '15px',
		margin: '20px 0px',
	},
	cardContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: '20px',
		flexWrap: 'wrap',
	},
	// Responsiveness
	// SM
	[theme.breakpoints.down('sm')]: {
		header: {
			fontSize: '3.5rem',
		},
	},
	// XS
	[theme.breakpoints.down('xs')]: {
		header: {
			fontSize: '1.8rem',
		},
	},
}))
