import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
		borderRadius: '20px',
	},
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#00bcd4',
	},
	form: {
		width: '300px',
		marginTop: theme.spacing(3),
	},
	textField: {
		margin: '10px 0',
	},
	button: {
		display: 'flex',
		marginTop: '10px',
		width: '50%',
		margin: '0 auto',
		color: 'white',
		backgroundColor: '#00bcd4',
		'&:hover': {
			backgroundColor: '#00838f',
		},
	},
	signLink: {
		marginTop: '5px',
		color: '#444444',
		textDecoration: 'none',
		'&:hover': {
			color: 'black',
		},
	},
}))
