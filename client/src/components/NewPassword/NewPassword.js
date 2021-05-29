import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'

import useStyles from './styles'

import { SERVER_URL } from '../../constants/fetchURL'

const Signin = () => {
	const classes = useStyles()
	const [password, setPassword] = useState('')
	const [showAlert, setShowAlert] = useState('')
	const history = useHistory()
    const {token} = useParams()

	// Submit data
	const submitData = () => {
		fetch(`${SERVER_URL}/user/new-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				password,
                token
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
				{/* SET NEW PASSWORD TEXT */}
				<Typography variant='h5' gutterBottom>
					Set new password
				</Typography>
				{/* FORM */}
				<form className={classes.form}>
					{/* ALERT FOR ERROR */}
					{showAlert === 'error' && (
						<Alert variant='outlined' severity='error'>
							Something went wrong. Please try again.
						</Alert>
					)}
					{/* PASSWORD */}
					<Grid className={classes.textField} item xs={12}>
						<TextField
							type='password'
							label='Enter new password'
							variant='outlined'
							required
							fullWidth
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Grid>
					{/* CHANGE PASSWORD BUTTON */}
					<Grid item xs={12}>
						<Button className={classes.button} variant='contained' onClick={submitData}>
							Change password
						</Button>
					</Grid>
				</form>
			</Paper>
		</Container>
	)
}

export default Signin
