import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setUser } from '../../actions/user'

// Components
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'
import CreatePost from '../CreatePost/CreatePost'
import UserProfile from '../UserProfile/UserProfile'
import FollowedPosts from '../FollowedPosts/FollowedPosts'
import ResetPassword from '../ResetPassword/ResetPassword'
import NewPassword from '../NewPassword/NewPassword'

const Routing = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		// Get user from local storage
		// Parse to object
		const user = JSON.parse(localStorage.getItem('user'))
		// Check if there's user
		if (user) {
			// Dispatch userInfo
			dispatch(setUser(user))
		} else {
			// Make exception for the reset page
			if(!history.location.pathname.startsWith('/reset'))
			// If there's no user -> Redirect to signin page
			history.push('/signin')
		}
	}, [dispatch, history])

	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/profile' exact component={Profile} />
			<Route path='/signin' exact component={Signin} />
			<Route path='/signup' exact component={Signup} />
			<Route path='/createpost' exact component={CreatePost} />
			<Route path='/profile/:userId' exact component={UserProfile} />
			<Route path='/followedPosts' exact component={FollowedPosts} />
			<Route path='/reset-password' exact component={ResetPassword} />
			<Route path='/reset-password/:token' exact component={NewPassword} />
		</Switch>
	)
}

export default Routing
