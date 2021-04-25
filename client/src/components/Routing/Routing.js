import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { userInfo } from '../../actions/user'

// Components
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'
import CreatePost from '../CreatePost/CreatePost'

const Routing = () => {
	const history = useHistory()
	const userState = useSelector((state) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		// Get user from local storage
		// Parse to object
		const user = JSON.parse(localStorage.getItem('user'))
		// Check if there's user
		if (user) {
			// Dispatch userInfo
			dispatch(userInfo(user))
			// Redirect to homepage
			history.push('/')
		}
		// If there's no user -> Redirect to signin page
		history.push('/signin')
	}, [])

	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/profile' exact component={Profile} />
			<Route path='/signin' exact component={Signin} />
			<Route path='/signup' exact component={Signup} />
			<Route path='/createpost' exact component={CreatePost} />
		</Switch>
	)
}

export default Routing
