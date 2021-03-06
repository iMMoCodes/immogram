import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Paper, Avatar, Grid, Typography, Card, IconButton, CircularProgress } from '@material-ui/core'
import StarsIcon from '@material-ui/icons/Stars'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

import { updateUser } from '../../actions/user'

import useStyles from './styles'
import { SERVER_URL } from '../../constants/fetchURL'

const UserProfile = () => {
	const classes = useStyles()
	const [userProfile, setUserProfile] = useState(null)
	const userState = useSelector((state) => state.user)
	const { userId } = useParams()
	const dispatch = useDispatch()
	const [isFollowing, setIsFollowing] = useState(userState?.following.includes(userId))

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
	}, [userId])

	const followUser = () => {
		fetch(`${SERVER_URL}/profile/follow`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				followId: userId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				const { following, followers } = data
				dispatch(updateUser(following, followers))
				localStorage.setItem('user', JSON.stringify(data))
				setUserProfile((prevState) => {
					return {
						...prevState,
						user: {
							...prevState.user,
							followers: [...prevState.user.followers, data._id],
						},
					}
				})
				setIsFollowing(true)
			})
	}

	const unfollowUser = () => {
		fetch(`${SERVER_URL}/profile/unfollow`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				unfollowId: userId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				const { following, followers } = data
				dispatch(updateUser(following, followers))
				localStorage.setItem('user', JSON.stringify(data))

				setUserProfile((prevState) => {
					const newFollowers = prevState.user.followers.filter((item) => item !== data._id)
					return {
						...prevState,
						user: {
							...prevState.user,
							followers: newFollowers,
						},
					}
				})
				setIsFollowing(false)
			})
	}

	return (
		<Container>
			{userProfile ? (
				<>
					<Paper className={classes.paper} elevation={3}>
						<Grid>
							<Avatar className={classes.avatar} src={userProfile.user.picture} />
						</Grid>
						<Grid className={classes.userInfoContainer}>
							<Typography className={classes.userName} variant='h3' align='center'>
								{userProfile.user.name}
							</Typography>
							<div className={classes.userStats}>
								<Typography variant='h5' align='center' className={classes.usersInfoText}>
									posts: {userProfile.posts.length}
								</Typography>
								<Typography variant='h5' align='center' className={classes.usersInfoText}>
									followers: {userProfile.user.followers.length}
								</Typography>
								<Typography variant='h5' align='center' className={classes.usersInfoText}>
									following: {userProfile.user.following.length}
								</Typography>
								{userId !== userState._id ? (
									<div>
										{isFollowing ? (
											<IconButton className={classes.unfollowButton} onClick={() => unfollowUser()}>
												<RemoveCircleOutlineIcon className={classes.unfollowIcon} />
												<Typography variant='h6' className={classes.unfollowText}>
													&nbsp;Unfollow
												</Typography>
											</IconButton>
										) : (
											<IconButton className={classes.followButton} onClick={() => followUser()}>
												<StarsIcon className={classes.followIcon} />
												<Typography variant='h6' className={classes.followText}>
													&nbsp;Follow
												</Typography>
											</IconButton>
										)}
									</div>
								) : null}
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
				<CircularProgress size='200px' />
			)}
		</Container>
	)
}

export default UserProfile
