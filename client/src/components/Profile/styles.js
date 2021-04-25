import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	paper: {
		display: 'flex',
		maxWidth: '90%',
		margin: '0 auto',
		borderRadius: '20px',
		backgroundColor: 'transparent',
	},
	avatar: {
		height: '160px',
		width: '160px',
		margin: '10px 50px',
	},
	userInfoContainer: {
		margin: '0 30px',
	},
	userStats: {
		display: 'flex',
		width: '280px',
		justifyContent: 'space-around',
	},
	userName: {
		color: '#bdbdbd',
	},
	userPostContainer: {
		maxWidth: '80%',
		margin: '20px auto',
		backgroundColor: 'transparent',
		borderRadius: '20px',
	},
	usersPostedImages: {
		margin: '30px',
		height: '205px',
		width: '205px',
		borderRadius: '20px',
	},
	usersPostsText: {
		color: '#bdbdbd',
	},
	usersInfoText: {
		color: '#bdbdbd',
	},
	// Responsiveness
	// SM
	[theme.breakpoints.down('sm')]: {
		paper: {
			flexDirection: 'column',
		},
		avatar: {
			margin: '10px auto',
		},
		userStats: {
			margin: '10px auto',
		},
		usersPostedImages: {
			height: '170px',
		},
	},
	// XS
	[theme.breakpoints.down('xs')]: {
		userStats: {
			flexDirection: 'column',
			maxWidth: '100%',
		},
		userName: {
			fontSize: '2.5rem',
		},
		usersPostsText: {
			fontSize: '2.5rem',
		},
		usersPostedImages: {
			margin: '5px',
			height: '140px',
		},
	},
}))
