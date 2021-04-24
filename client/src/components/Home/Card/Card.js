import React, { useState } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Button, TextField, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'

import useStyles from './styles'

const HomeCard = () => {
	const [openComment, setOpenComment] = useState(false)
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			{/* CARD HEADER */}
			<CardHeader
				avatar={<Avatar className={classes.avatar}>MM</Avatar>}
				action={
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				}
				title='Test Title'
				subheader='Posting time here'
			/>
			{/* CARD IMAGE */}
			<CardMedia
				className={classes.media}
				image='https://images.pexels.com/photos/4077423/pexels-photo-4077423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
			/>
			{/* CARD DESCRIPTION */}
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus fugiat corporis
					facere perferendis consequatur assumenda laudantium veritatis, eaque eum!
				</Typography>
			</CardContent>
			{/* CARD ACTION BUTTONS */}
			<CardActions className={classes.actionButtons}>
				{/* FAVORITE */}
				<IconButton>
					<FavoriteIcon className={classes.favoriteIcon} />
					<Typography variant='h6' className={classes.iconTexts}>
						&nbsp;Favorite
					</Typography>
				</IconButton>
				{/* COMMENT */}
				<IconButton onClick={() => setOpenComment(!openComment)}>
					<CommentIcon className={classes.commentIcon} />
					<Typography variant='h6' className={classes.iconTexts}>
						&nbsp;Comment
					</Typography>
				</IconButton>
			</CardActions>
			{openComment && (
				<div className={classes.commentSection}>
					<TextField className={classes.commentField} name='comment' variant='outlined' label='Comment' />
					<Button className={classes.commentButton} variant='contained'>
						Send
					</Button>
				</div>
			)}
		</Card>
	)
}

export default HomeCard
