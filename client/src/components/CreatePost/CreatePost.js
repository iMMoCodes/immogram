import React from 'react'
import FileBase from 'react-file-base64'
import { Paper, Typography, TextField, Button } from '@material-ui/core'

import useStyles from './styles'

const CreatePost = () => {
	const classes = useStyles()
	return (
		<Paper className={classes.paper}>
			<form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
				<Typography variant='h6'>Create a Post</Typography>
				<TextField name='title' type='text' variant='outlined' label='Title' fullWidth />
				<TextField name='message' type='text' variant='outlined' label='Message' fullWidth />
				<div className={classes.fileInput}>
					<FileBase type='file' multiple={false} />
				</div>
				<div className={classes.actionButtons}>
					<Button
						className={classes.buttonSubmit}
						variant='contained'
						color='primary'
						size='large'
						type='submit'
					>
						Submit
					</Button>
					<Button variant='contained' color='secondary' size='large'>
						Clear
					</Button>
				</div>
			</form>
		</Paper>
	)
}

export default CreatePost
