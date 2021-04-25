import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Button, TextField, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'

import useStyles from './styles'

const HomeCard = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [openComment, setOpenComment] = useState(false)
	const classes = useStyles()

	useEffect(() => {
		if (loading) {
			// Make request to get posts
			fetch('http://localhost:5000/post', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('jwt'),
				},
			})
				.then((res) => res.json())
				.then((result) => {
					// Set posts to data
					setData(result.posts)
				})
				.catch((err) => {
					console.log(err)
				})
		}
		// Clean up function
		return () => {
			setLoading(false)
		}
	}, [loading])

	return (
		<>
			{data.map((item) => {
				return (
					<Card className={classes.root} key={item._id}>
						{/* HEADER */}
						<CardHeader
							avatar={
								<Avatar className={classes.avatar}>
									{item.createdBy.name
										.charAt(
											0
										)
										.toUpperCase()}
								</Avatar>
							}
							action={
								<IconButton>
									<MoreVertIcon />
								</IconButton>
							}
							title={item.title}
							subheader={moment(item.createdAt).fromNow()}
						/>
						{/* IMAGE */}
						<CardMedia className={classes.media} image={item.picture} />
						<CardContent>
							{/* DESCRIPTION */}
							<Typography
								variant='body2'
								color='textSecondary'
								component='p'
							>
								{item.body}
							</Typography>
						</CardContent>
						{/* CARD BUTTONS */}
						<CardActions className={classes.actionButtons}>
							<IconButton>
								<FavoriteIcon
									className={
										classes.favoriteIcon
									}
								/>
								<Typography
									variant='h6'
									className={
										classes.iconTexts
									}
								>
									&nbsp;Favorite
								</Typography>
							</IconButton>
							<IconButton onClick={() => setOpenComment(!openComment)}>
								<CommentIcon
									className={
										classes.commentIcon
									}
								/>
								<Typography
									variant='h6'
									className={
										classes.iconTexts
									}
								>
									&nbsp;Comment
								</Typography>
							</IconButton>
						</CardActions>
						{/* COMMENT SECTION */}
						{openComment && (
							<div className={classes.commentSection}>
								<TextField
									className={
										classes.commentField
									}
									name='comment'
									variant='outlined'
									label='Comment'
								/>
								<Button
									className={
										classes.commentButton
									}
									variant='contained'
								>
									Send
								</Button>
							</div>
						)}
					</Card>
				)
			})}
		</>
	)
}

export default HomeCard
