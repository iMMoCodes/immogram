import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

import { SERVER_URL } from '../../../constants/fetchURL'

import useStyles from './styles'

const HomeCard = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const classes = useStyles()
	const userState = useSelector((state) => state.user)

	const likePost = (id) => {
		// Make request
		fetch(`${SERVER_URL}/post/like`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId: id,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				// Updated data
				const newData = data.map((item) => {
					if (item._id === result._id) {
						return result
					} else {
						return item
					}
				})
				setData(newData)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const unlikePost = (id) => {
		// Make request
		fetch(`${SERVER_URL}/post/unlike`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId: id,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				// Updated data
				const newData = data.map((item) => {
					if (item._id === result._id) {
						return result
					} else {
						return item
					}
				})
				setData(newData)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		if (loading) {
			// Make request to get posts
			fetch(`${SERVER_URL}/post`, {
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
									{item?.createdBy?.name
										?.charAt(
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
							{/* FAVORITE */}
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
							{/* LIKE */}
							{item.likes.includes(userState._id) ? (
								<IconButton
									onClick={() =>
										unlikePost(
											item._id
										)
									}
								>
									<ThumbDownIcon
										className={
											classes.unlikeIcon
										}
									/>
									<Typography
										variant='h6'
										className={
											classes.iconTexts
										}
									>
										&nbsp;
										{
											item
												.likes
												.length
										}
									</Typography>
								</IconButton>
							) : (
								<IconButton
									onClick={() =>
										likePost(
											item._id
										)
									}
								>
									<ThumbUpAltIcon
										className={
											classes.likeIcon
										}
									/>
									<Typography
										variant='h6'
										className={
											classes.iconTexts
										}
									>
										&nbsp;
										{
											item
												.likes
												.length
										}
									</Typography>
								</IconButton>
							)}

							{/* COMMENT */}
							<IconButton>
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
					</Card>
				)
			})}
		</>
	)
}

export default HomeCard
