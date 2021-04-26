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
	commentField: {
		display: 'flex',
		margin: '7px 7px',
	},
	commentText: {
		flex: '6',
	},
	sendComment: {
		flex: '1',
		backgroundColor: '#00bcd4',
		'&:hover': {
			backgroundColor: '#00838f',
		},
	},
	commentArea: {
		display: 'flex',
		alignItems: 'center',
		margin: '10px 10px',
	},
	commentSender: {
		justifyContent: 'flex-start',
	},
	commentSendText: {
		justifyContent: 'flex-end',
	},

	// Expanding on click
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	collapseButtons: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	deleteButton: {
		backgroundColor: '#d50000',
		'&:hover': {
			backgroundColor: '#b71c1c',
		},
	},
	editButton: {
		backgroundColor: '#4caf50',
		'&:hover': {
			backgroundColor: '#2e7d32',
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
