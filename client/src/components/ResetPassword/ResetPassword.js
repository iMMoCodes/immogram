import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'

import useStyles from './styles'

import { SERVER_URL } from '../../constants/fetchURL'

const ResetPassword = () => {
	const classes = useStyles()
	const [email, setEmail] = useState('')
	const [showAlert, setShowAlert] = useState('')
	const history = useHistory()

	// Submit data
	const submitData = () => {
		fetch(`${SERVER_URL}/user/reset-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email
			}),
		})
			// Convert response
			.then((res) => res.json())
			.then((data) => {
				// Show alert if there's an error
				if (data.error) {
					return setShowAlert('error')
				}
				// Redirect
				history.push('/signin')
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
				{/* PASSWORD RESET TEXT */}
				<Typography variant='h5' gutterBottom>
					Enter your email
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
					{/* RESET BUTTON */}
					<Grid item xs={12}>
						<Button className={classes.button} variant='contained' onClick={submitData}>
							Send password reset link
						</Button>
					</Grid>
				</form>
			</Paper>
		</Container>
	)
}

export default ResetPassword
