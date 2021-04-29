import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'

import useStyles from './styles'
import PostCard from './Card/Card'

const FollowedPosts = () => {
	const classes = useStyles()

	return (
		<Container className={classes.mainContainer}>
			<Typography className={classes.header} variant='h1' align='center'>
				ImmoGram
			</Typography>
			<Grid className={classes.cardContainer}>
				<PostCard />
			</Grid>
		</Container>
	)
}

export default FollowedPosts
