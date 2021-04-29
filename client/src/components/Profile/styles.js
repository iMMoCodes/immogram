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
		marginBottom: '10px',
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
	followedPostsButton: {
		display: 'flex',
		width: '200px',
		margin: '10px auto',
		backgroundColor: '#ffeb3b',
		'&:hover': {
			backgroundColor: '#f9a825',
		},
	},
	pictureContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	updatePictureButton: {
		height: '20px',
		width: '254px',
		backgroundColor: '#000000',
		'&:hover': {
			backgroundColor: '#000000',
		},
		color: '#bdbdbd',
		cursor: 'default',
	},
	relativeContainer: {
		position: 'relative',
	},
	fileInputContainer: {
		position: 'absolute',
		bottom: '-25px',
		left: '-127px',
		opacity: '0',
		zIndex: '2',
	},
	updateButtonContainer: {
		position: 'absolute',
		bottom: '-25px',
		left: '-127px',
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
		userInfoContainer: {
			marginTop: '40px',
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
