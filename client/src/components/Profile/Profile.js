import React from 'react'
import { Container, Paper, Avatar, Grid, Typography, Card } from '@material-ui/core'

import useStyles from './styles'

const Profile = () => {
	const classes = useStyles()
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
						Username
					</Typography>
					<div className={classes.userStats}>
						<Typography variant='body1'>40 posts</Typography>
						<Typography variant='body1'>40 followers</Typography>
						<Typography variant='body1'>40 following</Typography>
					</div>
				</Grid>
			</Paper>
			{/* USER POSTS */}
			<Card className={classes.userPostContainer} elevation={3}>
				<Typography className={classes.usersPostsText} variant='h3' align='center'>
					Posts
				</Typography>
				<img
					alt='TestPhoto'
					className={classes.usersPostedImages}
					src='https://images.pexels.com/photos/5237734/pexels-photo-5237734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<img
					alt='TestPhoto'
					className={classes.usersPostedImages}
					src='https://images.pexels.com/photos/5237734/pexels-photo-5237734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<img
					alt='TestPhoto'
					className={classes.usersPostedImages}
					src='https://images.pexels.com/photos/5237734/pexels-photo-5237734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<img
					alt='TestPhoto'
					className={classes.usersPostedImages}
					src='https://images.pexels.com/photos/5237734/pexels-photo-5237734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<img
					alt='TestPhoto'
					className={classes.usersPostedImages}
					src='https://images.pexels.com/photos/5237734/pexels-photo-5237734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<img
					alt='TestPhoto'
					className={classes.usersPostedImages}
					src='https://images.pexels.com/photos/5237734/pexels-photo-5237734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
			</Card>
		</Container>
	)
}

export default Profile
