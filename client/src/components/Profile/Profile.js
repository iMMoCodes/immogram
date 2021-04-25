import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Paper, Avatar, Grid, Typography, Card } from '@material-ui/core'

import useStyles from './styles'
import { SERVER_URL } from '../../constants/fetchURL'

const Profile = () => {
	const classes = useStyles()
	const [ownPosts, setOwnPosts] = useState([])
	const userState = useSelector((state) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		// Send request to get own posts
		fetch(`${SERVER_URL}/post/ownposts`, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setOwnPosts(result.myPosts)
			})
	}, [])

	return (
		<Container>
			<Paper className={classes.paper} elevation={3}>
				<Grid>
					{/* USER IMAGE */}
					<Avatar
						className={classes.avatar}
						src='https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					/>
				</Grid>
				{/* USERNAME AND USER INFO */}
				<Grid className={classes.userInfoContainer}>
					<Typography className={classes.userName} variant='h3' align='center'>
						{userState?.name}
					</Typography>
					<div className={classes.userStats}>
						<Typography variant='h5' align='center' className={classes.usersInfoText}>
							40 posts
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
			{/* USER POSTS */}
			<Card className={classes.userPostContainer} elevation={3}>
				<Typography className={classes.usersPostsText} variant='h3' align='center'>
					Posts
				</Typography>
				{ownPosts.map((post) => {
					return (
						<img
							key={post._id}
							alt={post.title}
							className={classes.usersPostedImages}
							src={post.picture}
						/>
					)
				})}
			</Card>
		</Container>
	)
}

export default Profile
