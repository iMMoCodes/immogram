import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Styles
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PostAddIcon from '@material-ui/icons/PostAdd'
import useStyles from './styles'

const Navbar = () => {
	const dispatch = useDispatch()
	const userState = useSelector((state) => state.user)
	const classes = useStyles()

	// Make function to show right buttons to user
	const showButtons = () => {
		// User is logged
		if (userState) {
			return [
				// PROFILE BUTTON
				<Button component={Link} to='/profile' variant='contained' className={`${classes.profileButton} ${classes.buttons}`}>
					<AccountCircleIcon />
					<Typography variant='body2'>&nbsp;Profile</Typography>
				</Button>,
				// CREATE POST BUTTON
				<Button
					component={Link}
					to='/createpost'
					variant='contained'
					className={`${classes.createPostButton} ${classes.buttons}`}
				>
					<PostAddIcon />
					<Typography variant='body2'>&nbsp;Create post</Typography>
				</Button>,
				// LOGOUT BUTTON
				<Button component={Link} to='/signin' variant='contained' className={`${classes.logoutButton} ${classes.buttons}`}>
					<ExitToAppOutlinedIcon />
					<Typography variant='body2'>&nbsp;Logout</Typography>
				</Button>,
			]
		}
		// User not logged
		return [
			// LOGIN BUTTON
			<Button component={Link} to='/signin' variant='contained' className={`${classes.loginButton} ${classes.buttons}`}>
				<ExitToAppOutlinedIcon />
				<Typography variant='body2'>&nbsp;Login</Typography>
			</Button>,
			// SIGN UP BUTTON
			<Button component={Link} to='/signup' variant='contained' className={`${classes.signUpButton} ${classes.buttons}`}>
				<AddBoxOutlinedIcon />
				<Typography variant='body2'>&nbsp;Sign Up</Typography>
			</Button>,
		]
	}

	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			{/* LOGO */}
			<div className={classes.brandContainer}>
				{/* HEADER */}
				<Typography component={Link} to={userState ? '/' : '/signin'} className={classes.heading} variant='h2' align='center'>
					ImmoGram
				</Typography>
			</div>
			<Toolbar className={classes.toolbar}>{showButtons()}</Toolbar>
		</AppBar>
	)
}

export default Navbar
