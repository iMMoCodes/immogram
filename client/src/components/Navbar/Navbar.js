import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Styles
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'

// Helper to show right buttons to user
import { GetUserButtons } from '../../helpers/UserButtons/GetUserButtons'

const Navbar = () => {
	const userState = useSelector((state) => state.user)
	const classes = useStyles()

	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			{/* LOGO */}
			<div className={classes.brandContainer}>
				{/* HEADER */}
				<Typography component={Link} to={userState ? '/' : '/signin'} className={classes.heading} variant='h2' align='center'>
					ImmoGram
				</Typography>
			</div>
			<Toolbar className={classes.toolbar}>{GetUserButtons()}</Toolbar>
		</AppBar>
	)
}

export default Navbar
