import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './styles'

const Signup = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showAlert, setShowAlert] = useState('')
	const classes = useStyles()
	const history = useHistory()

	// Submit data
	const submitData = () => {
		fetch('http://localhost:5000/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
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
				// Show success message
				setShowAlert('success')
				// Redirect after 10 seconds
				setTimeout(() => {
					history.push('/signin')
				}, 10000)
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
					Sign Up
				</Typography>
				{/* FORM */}
				{/* ALERT MESSAGE*/}
				{showAlert === 'error' && (
					<Alert variant='outlined' severity='error'>
						Please fill all fields.
					</Alert>
				)}
				{/* SUCCESS MESSAGE*/}
				{showAlert === 'success' && (
					<>
						<Alert
							className={classes.successAlert}
							component={Link}
							to='/signin'
							variant='outlined'
							severity='success'
						>
							Account created succesfully. Click here to login.
						</Alert>
						{/* REDIRECT MESSAGE */}
						<Alert variant='outlined' severity='info'>
							You will be automatically redirected to login page after 10
							seconds.
						</Alert>
					</>
				)}
				<form className={classes.form}>
					{/* NAME */}
					<Grid className={classes.textField} item xs={12}>
						<TextField
							type='text'
							label='name'
							variant='outlined'
							required
							fullWidth
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Grid>
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
