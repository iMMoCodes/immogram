import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined'
import useStyles from './styles'

const Navbar = () => {
	const classes = useStyles()
	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			{/* LOGO */}
			<div className={classes.brandContainer}>
				<Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>
					ImmoGram
				</Typography>
			</div>
			<Toolbar className={classes.toolbar}>
				{/* LOGIN BUTTON */}
				<Button component={Link} to='/signin' variant='contained' className={classes.loginButton}>
					<ExitToAppOutlinedIcon /> &nbsp; Login
				</Button>
				{/* SIGN UP BUTTON */}
				<Button component={Link} to='/signup' variant='contained' className={classes.signUpButton} color='secondary'>
					<AddBoxOutlinedIcon /> &nbsp; Sign Up
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
