import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Paper, Avatar, Grid, Typography, Card, Button } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import FileBase from 'react-file-base64'

import { updateUserPic } from '../../actions/user'

import useStyles from './styles'
import { SERVER_URL } from '../../constants/fetchURL'
import { IMAGE_SERVER_URL } from '../../constants/fetchURL'

const Profile = () => {
	const classes = useStyles()
	const [ownPosts, setOwnPosts] = useState([])
	const [image, setImage] = useState('')
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

	const sendPicToBackEnd = (pictureUrl) => {
		fetch(`${SERVER_URL}/profile/updatepic`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				picture: pictureUrl,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				// Save to front end
				localStorage.setItem('user', JSON.stringify({ ...userState, picture: result.picture }))
				dispatch(updateUserPic(result.picture))
			})
	}

	useEffect(() => {
		if (image) {
			// To upload a file
			const data = new FormData()
			data.append('file', image)
			data.append('upload_preset', 'immogram')
			data.append('cloud_name', 'immocodes')
			// Make request
			fetch(`${IMAGE_SERVER_URL}/image/upload`, {
				method: 'POST',
				body: data,
			})
				// Convert JSON
				.then((res) => res.json())
				.then((data) => {
					// Send to backend
					sendPicToBackEnd(data.url)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [image])
	// Update profile picture
	const updateProfilePic = (file) => {
		setImage(file)
	}

	return (
		<Container>
			<Paper className={classes.paper} elevation={3}>
				<Grid className={classes.pictureContainer}>
					{/* USER IMAGE */}
					<Avatar className={classes.avatar} src={userState ? userState.picture : 'Loading'} />
					<div className={classes.relativeContainer}>
						<div className={classes.updateButtonContainer}>
							<Button className={classes.updatePictureButton} variant='contained'>
								Change Picture
							</Button>
						</div>
						<div className={classes.fileInputContainer}>
							<FileBase type='file' multiple={false} onDone={({ base64 }) => updateProfilePic(base64)} />
						</div>
					</div>
				</Grid>
				{/* USERNAME AND USER INFO */}
				<Grid className={classes.userInfoContainer}>
					<Typography className={classes.userName} variant='h3' align='center'>
						{userState?.name}
					</Typography>
					<div className={classes.userStats}>
						<Typography variant='h5' align='center' className={classes.usersInfoText}>
							{ownPosts.length} posts
						</Typography>
						<Typography variant='h5' align='center' className={classes.usersInfoText}>
							{userState?.followers?.length} followers
						</Typography>
						<Typography variant='h5' align='center' className={classes.usersInfoText}>
							{userState?.following?.length} following
						</Typography>
					</div>
					<Button component={Link} to='/followedPosts' variant='contained' className={classes.followedPostsButton}>
						<StarIcon />
						<Typography variant='body2'>Followed Posts</Typography>
					</Button>
				</Grid>
			</Paper>
			{/* USER POSTS */}
			<Card className={classes.userPostContainer} elevation={3}>
				<Typography className={classes.usersPostsText} variant='h3' align='center'>
					Posts
				</Typography>
				{ownPosts.map((post) => {
					return <img key={post._id} alt={post.title} className={classes.usersPostedImages} src={post.picture} />
				})}
			</Card>
		</Container>
	)
}

export default Profile
