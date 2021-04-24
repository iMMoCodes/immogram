import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import CreatePost from './components/CreatePost/CreatePost'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/profile' exact component={Profile} />
					<Route path='/signin' exact component={Signin} />
					<Route path='/signup' exact component={Signup} />
					<Route path='/create' exact component={CreatePost} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
