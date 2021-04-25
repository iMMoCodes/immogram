import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FileBase from 'react-file-base64'
import { Paper, Typography, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import useStyles from './styles'

const CreatePost = () => {
	const [title, setTitle] = useState('')
	const [message, setMessage] = useState('')
	const [image, setImage] = useState('')
	const [url, setUrl] = useState('')
	const [showAlert, setShowAlert] = useState('')
	const classes = useStyles()
	const history = useHistory()

	useEffect(() => {
		// Need to wait for the URL to change before posting to server
		if (url) {
			// Make request to server
			fetch('http://localhost:5000/post/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('jwt'),
				},
				body: JSON.stringify({
					title,
					body: message,
					picture: url,
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
					// Redirect after 2 seconds
					setTimeout(() => {
						history.push('/')
					}, 2000)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [url])

	const submitDetails = () => {
		// To upload a file
		const data = new FormData()
		data.append('file', image)
		data.append('upload_preset', 'immogram')
		data.append('cloud_name', 'immocodes')
		// Make request
		fetch('https://api.cloudinary.com/v1_1/immocodes/image/upload', {
			method: 'POST',
			body: data,
		})
			// Convert JSON
			.then((res) => res.json())
			.then((data) => {
				// Set image URL
				setUrl(data.url)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Paper className={classes.paper}>
			<form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
				<div className={classes.headingWarning}>
					<Typography variant='h6' align='center'>
						Create a Post
					</Typography>
					{/* ALERT FOR ERROR */}
					{showAlert === 'error' && (
						<Alert variant='outlined' severity='error'>
							There was an error. Please fill all the fields and try
							again.
						</Alert>
					)}
					{/* SUCCESS MESSAGE*/}
					{showAlert === 'success' && (
						<>
							<Alert variant='outlined' severity='success'>
								Post created succesfully.
							</Alert>
						</>
					)}
				</div>
				{/* TITLE */}
				<TextField
					name='title'
					type='text'
					variant='outlined'
					label='Title'
					fullWidth
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				{/* MESSAGE */}
				<TextField
					name='message'
					type='text'
					variant='outlined'
					label='Message'
					fullWidth
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{/* IMAGE FILE */}
				<div className={classes.fileInput}>
					<FileBase type='file' multiple={false} onDone={({ base64 }) => setImage(base64)} />
				</div>
				{/* ACTION BUTTONS */}
				<div className={classes.actionButtons}>
					{/* SUBMIT */}
					<Button
						className={classes.buttonSubmit}
						variant='contained'
						color='primary'
						size='large'
						onClick={submitDetails}
					>
						Submit
					</Button>
					{/* CLEAR */}
					<Button variant='contained' color='secondary' size='large'>
						Clear
					</Button>
				</div>
			</form>
		</Paper>
	)
}

export default CreatePost
