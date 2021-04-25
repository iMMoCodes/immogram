import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	root: {
		margin: '50px 20px',
		borderRadius: '20px',
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
	avatar: {
		backgroundColor: 'red',
	},
	actionButtons: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	favoriteIcon: {
		color: 'red',
	},
	commentIcon: {
		color: 'blue',
	},
	iconTexts: {
		color: '#444444',
	},
	commentSection: {
		display: 'flex',
		width: '100%',
	},
	commentField: {
		flex: '7',
	},
	commentButton: {
		flex: '1',
		backgroundColor: '#00bcd4',
		'&:hover': {
			backgroundColor: '#00838f',
		},
	},
	// Responsiveness
	// XL
	[theme.breakpoints.up('xl')]: {
		root: {
			width: '40%',
		},
	},
	// LG
	[theme.breakpoints.down('lg')]: {
		root: {
			width: '40%',
		},
	},
	// SM
	[theme.breakpoints.down('sm')]: {
		root: {
			width: '100%',
		},
		actionButtons: {
			flexDirection: 'column',
		},
	},
}))
