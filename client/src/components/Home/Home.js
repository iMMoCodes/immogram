import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'

import useStyles from './styles'
import HomeCard from './Card/Card'

const Home = () => {
	const classes = useStyles()

	return (
		<Container className={classes.mainContainer}>
			<Typography className={classes.header} variant='h1' align='center'>
				ImmoGram
			</Typography>
			<Grid className={classes.cardContainer}>
				<HomeCard />
			</Grid>
		</Container>
	)
}

export default Home
