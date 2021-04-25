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
		color: '#b71c1c',
	},
	commentIcon: {
		color: '#01579b',
	},
	likeIcon: {
		color: '#03a9f4',
	},
	unlikeIcon: {
		color: '#d32f2f',
	},
	iconTexts: {
		color: '#444444',
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
