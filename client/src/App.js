import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'
import Routing from './components/Routing/Routing'

import './App.css'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routing />
			</BrowserRouter>
		</>
	)
}

export default App
