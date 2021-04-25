import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'
import Routing from './components/Routing/Routing'

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
