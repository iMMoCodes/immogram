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
		width: '800px',
		alignItems: 'center',
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
	followButton: {
		width: '120px',
		height: '60px',
		border: '1px solid #cddc39',
	},
	followIcon: {
		color: '#cddc39',
	},
	followText: {
		color: '#cddc39',
	},
	unfollowButton: {
		width: '120px',
		height: '60px',
		border: '1px solid #ff9800',
	},
	unfollowIcon: {
		color: '#ff9800',
	},
	unfollowText: {
		color: '#ff9800',
	},
	// Responsiveness
	// MD
	[theme.breakpoints.down('md')]: {
		userStats: {
			width: '570px',
		},
	},
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
			width: '470px',
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
