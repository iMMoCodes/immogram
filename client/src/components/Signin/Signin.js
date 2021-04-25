import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'

import useStyles from './styles'

import { setUser } from '../../actions/user'
import { SERVER_URL } from '../../constants/fetchURL'

const Signin = () => {
	const classes = useStyles()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showAlert, setShowAlert] = useState('')
	const history = useHistory()
	const dispatch = useDispatch()

	// Submit data
	const submitData = () => {
		fetch(`${SERVER_URL}/user/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			// Convert response
			.then((res) => res.json())
			.then((data) => {
				// Show alert if there's an error
				if (data.error) {
					return setShowAlert('error')
				}
				// Save token to local storage
				localStorage.setItem('jwt', data.token)
				// Save user details to local storage
				localStorage.setItem('user', JSON.stringify(data.user))
				// Dispatch user info
				dispatch(setUser(data.user))
				// Redirect
				history.push('/')
			})
			.catch((err) => {
				console.log(err)
			})
	}

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
					{/* ALERT FOR WRONG CREDENTIALS */}
					{showAlert === 'error' && (
						<Alert variant='outlined' severity='error'>
							Invalid credentials. Please try again.
						</Alert>
					)}
					{/* EMAIL */}
					<Grid className={classes.textField} item xs={12}>
						<TextField
							type='text'
							label='email'
							variant='outlined'
							required
							fullWidth
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Grid>
					{/* PASSWORD */}
					<Grid className={classes.textField} item xs={12}>
						<TextField
							type='password'
							label='password'
							variant='outlined'
							required
							fullWidth
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Grid>
					{/* LOGIN BUTTON */}
					<Grid item xs={12}>
						<Button className={classes.button} variant='contained' onClick={submitData}>
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
