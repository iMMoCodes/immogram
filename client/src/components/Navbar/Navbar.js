import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { AppBar, Button, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { loginTheme } from './styles'
import useStyles from './styles'

const Navbar = () => {
	const classes = useStyles()
	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			<div className={classes.brandContainer}>
				<Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>
					ImmoGram
				</Typography>
			</div>
			<Toolbar className={classes.toolbar}>
				<ThemeProvider theme={loginTheme}>
					<Button
						component={Link}
						to='/signin'
						variant='contained'
						className={classes.button}
						color='primary'
					>
						Login
					</Button>
					<Button
						component={Link}
						to='/signup'
						variant='contained'
						className={classes.button}
						color='secondary'
					>
						Sign Up
					</Button>
				</ThemeProvider>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
