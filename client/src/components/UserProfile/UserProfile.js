import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Paper, Avatar, Grid, Typography, Card } from '@material-ui/core'

import useStyles from './styles'
import { SERVER_URL } from '../../constants/fetchURL'
import Loader from '../../helpers/Loader/Loader'

const UserProfile = () => {
	const classes = useStyles()
	const [userProfile, setUserProfile] = useState(null)
	const userState = useSelector((state) => state.user)
	const { userId } = useParams()

	useEffect(() => {
		// Send request to get own posts
		fetch(`${SERVER_URL}/profile/${userId}`, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setUserProfile(result)
			})
	}, [])

	return (
		<Container>
			{userProfile ? (
				<>
					<Paper className={classes.paper} elevation={3}>
						<Grid>
							<Avatar
								className={classes.avatar}
								src='https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
							/>
						</Grid>
						<Grid className={classes.userInfoContainer}>
							<Typography className={classes.userName} variant='h3' align='center'>
								{userProfile.user.name}
							</Typography>
							<div className={classes.userStats}>
								<Typography variant='h5' align='center' className={classes.usersInfoText}>
									{userProfile.posts.length} posts
								</Typography>
								<Typography variant='h5' align='center' className={classes.usersInfoText}>
									40 followers
								</Typography>
								<Typography variant='h5' align='center' className={classes.usersInfoText}>
									40 following
								</Typography>
							</div>
						</Grid>
					</Paper>
					<Card className={classes.userPostContainer} elevation={3}>
						<Typography className={classes.usersPostsText} variant='h3' align='center'>
							Posts
						</Typography>
						{userProfile.posts.map((post) => {
							return <img key={post._id} alt={post.title} className={classes.usersPostedImages} src={post.picture} />
						})}
					</Card>
				</>
			) : (
				<Loader />
			)}
		</Container>
	)
}

export default UserProfile
