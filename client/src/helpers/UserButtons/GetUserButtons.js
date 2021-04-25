import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'

import { logOut } from '../../actions/user'

import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PostAddIcon from '@material-ui/icons/PostAdd'

import useStyles from './styles'

// Make function to show right buttons to user
export const GetUserButtons = () => {
	const userState = useSelector((state) => state.user)
	const classes = useStyles()
	const dispatch = useDispatch()

	// Logout
	const handleLogout = () => {
		// Remove data from local storage
		localStorage.clear()
		// Set userState to null
		dispatch(logOut())
	}

	// User is logged
	if (userState) {
		return [
			// PROFILE BUTTON
			<Button key={0} component={Link} to='/profile' variant='contained' className={`${classes.profileButton} ${classes.buttons}`}>
				<AccountCircleIcon />
				<Typography variant='body2'>&nbsp;Profile</Typography>
			</Button>,
			// CREATE POST BUTTON
			<Button key={1} component={Link} to='/createpost' variant='contained' className={`${classes.createPostButton} ${classes.buttons}`}>
				<PostAddIcon />
				<Typography variant='body2'>&nbsp;Create post</Typography>
			</Button>,
			// LOGOUT BUTTON
			<Button
				key={2}
				component={Link}
				to='/signin'
				variant='contained'
				className={`${classes.logoutButton} ${classes.buttons}`}
				onClick={handleLogout}
			>
				<ExitToAppOutlinedIcon />
				<Typography variant='body2'>&nbsp;Logout</Typography>
			</Button>,
		]
	}
	// User not logged
	return [
		// LOGIN BUTTON
		<Button key={4} component={Link} to='/signin' variant='contained' className={`${classes.loginButton} ${classes.buttons}`}>
			<ExitToAppOutlinedIcon />
			<Typography variant='body2'>&nbsp;Login</Typography>
		</Button>,
		// SIGN UP BUTTON
		<Button key={5} component={Link} to='/signup' variant='contained' className={`${classes.signUpButton} ${classes.buttons}`}>
			<AddBoxOutlinedIcon />
			<Typography variant='body2'>&nbsp;Sign Up</Typography>
		</Button>,
	]
}
