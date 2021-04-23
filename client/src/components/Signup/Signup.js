import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './styles'

const Signup = () => {
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
					Sign Up
				</Typography>
				{/* FORM */}
				<form className={classes.form}>
					{/* NAME */}
					<Grid item xs={12}>
						<TextField type='text' label='name' variant='outlined' required fullWidth />
					</Grid>
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
							Sign Up
						</Button>
					</Grid>
				</form>
				{/* USER ALREADY HAS AN ACCOUNT */}
				<Typography className={classes.signLink} component={Link} to='/signin' variant='body1'>
					Already have an account? Click here to Sign In.
				</Typography>
			</Paper>
		</Container>
	)
}

export default Signup
