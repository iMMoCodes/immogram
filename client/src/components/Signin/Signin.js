import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './styles'

const Signin = () => {
	const classes = useStyles()
	return (
		<Container>
			<Paper className={classes.paper} elevation={3}>
				{/* LOCK ICON */}
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				{/* SIGN IN TEXT */}
				<Typography variant='h5' gutterBottom>
					Sign In
				</Typography>
				{/* FORM */}
				<form className={classes.form}>
					{/* EMAIL */}
					<Grid item xs={12}>
						<TextField type='text' label='email' variant='outlined' required fullWidth />
					</Grid>
					{/* PASSWORD */}
					<Grid item xs={12}>
						<TextField
							type='password'
							label='password'
							variant='outlined'
							required
							fullWidth
						/>
					</Grid>
					{/* LOGIN BUTTON */}
					<Grid item xs={12}>
						<Button className={classes.button} variant='contained'>
							Login
						</Button>
					</Grid>
				</form>
				{/* USER NEEDS AN ACCOUNT */}
				<Typography className={classes.signLink} component={Link} to='/signup' variant='body1'>
					Don't have an account? Click here to Sign Up.
				</Typography>
			</Paper>
		</Container>
	)
}

export default Signin
