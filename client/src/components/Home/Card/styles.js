import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	root: {
		maxWidth: '340px',
		margin: '50px 20px',
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
	// SM
	[theme.breakpoints.down('sm')]: {
		root: {
			maxWidth: '290px',
		},
		actionButtons: {
			flexDirection: 'column',
		},
	},
	//XS
	[theme.breakpoints.down('xs')]: {
		root: {
			maxWidth: '500px',
		},
	},
}))
