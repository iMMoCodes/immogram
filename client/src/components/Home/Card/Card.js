import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, TextField, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
// import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { SERVER_URL } from '../../../constants/fetchURL'

import useStyles from './styles'

const HomeCard = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const classes = useStyles()
	const userState = useSelector((state) => state.user)

	// Like
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

	// Dislike
	const dislikePost = (id) => {
		// Make request
		fetch(`${SERVER_URL}/post/dislike`, {
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

	// Comment
	const makeComment = (text, postId) => {
		fetch(`${SERVER_URL}/post/comment`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId,
				text,
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

	// Delete post
	const deletePost = (postId) => {
		fetch(`${SERVER_URL}/post/delete/${postId}`, {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
		})
			.then((res) => res.json())
			.then((result) => {
				const newData = data.filter((item) => {
					return item._id !== result._id
				})
				setData(newData)
			})
	}

	// Delete comment
	const deleteComment = (text, postId) => {
		fetch(`${SERVER_URL}/post/delete/comment`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId,
				text,
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
	// Get posts
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
								<Avatar component={Link} to={`/profile/${item.createdBy._id}`} className={classes.avatar}>
									{item?.createdBy?.name?.charAt(0).toUpperCase()}
								</Avatar>
							}
							title={item.title}
							subheader={moment(item.createdAt).fromNow()}
						/>
						<CardActions className={classes.collapseButtons}>
							{item.createdBy._id === userState._id ? (
								<>
									{/* <Button className={classes.editButton}>
										<EditIcon />
										Edit post
									</Button> */}
									<Button className={classes.deleteButton} onClick={() => deletePost(item._id)}>
										<DeleteForeverIcon />
										Delete post
									</Button>
								</>
							) : (
								<>
									{item.likes.includes(userState._id) ? (
										<IconButton onClick={() => dislikePost(item._id)}>
											<ThumbDownIcon className={classes.unlikeIcon} />
											<Typography variant='h6' className={classes.iconTexts}>
												{item.likes.length}
											</Typography>
										</IconButton>
									) : (
										<IconButton onClick={() => likePost(item._id)}>
											<ThumbUpAltIcon className={classes.likeIcon} />
											<Typography variant='h6' className={classes.iconTexts}>
												{item.likes.length}
											</Typography>
										</IconButton>
									)}
								</>
							)}
						</CardActions>
						{/* IMAGE */}
						<CardMedia className={classes.media} image={item.picture} />
						<CardContent>
							{/* DESCRIPTION */}
							<Typography variant='body2' color='textSecondary' component='p'>
								{item.body}
							</Typography>
						</CardContent>
						{/* COMMENTS */}
						{item.comments.map((comment) => {
							return (
								<div className={classes.commentArea} key={comment._id}>
									<Typography className={classes.commentSender} variant='h6'>
										{comment.createdBy.name}
										&nbsp;:&nbsp;
									</Typography>
									<Typography className={classes.commentSendText} variant='body2'>
										{comment.text}
									</Typography>
									{comment.createdBy._id === userState._id && (
										<Button
											className={classes.deleteCommentButton}
											onClick={() => {
												deleteComment(comment.text, item._id)
											}}
										>
											<DeleteForeverIcon />
										</Button>
									)}
								</div>
							)
						})}
						<form
							onSubmit={(e) => {
								e.preventDefault()
								makeComment(e.target[0].value, item._id)
								e.target[0].value = ''
							}}
							className={classes.commentField}
							noValidate
						>
							<TextField variant='outlined' label='Add a comment' className={classes.commentText} />
							<Button type='submit' className={classes.sendComment}>
								Send
							</Button>
						</form>
					</Card>
				)
			})}
		</>
	)
}

export default HomeCard
