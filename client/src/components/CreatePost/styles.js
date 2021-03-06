import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		maxWidth: '50%',
		margin: '0 auto',
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	fileInput: {
		width: '97%',
		margin: '10px 0',
	},
	actionButtons: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '500px',
		marginTop: '50px',
	},
	headingWarning: {
		display: 'flex',
		flexDirection: 'column',
	},
}))
