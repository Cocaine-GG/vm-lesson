import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './navbar'
import Login from './login'
import Dashboard from './dashboard'
import Home from './home'
import Posts from './posts'
import NotFound from './not-found'

const App = () => {

	return (
		<BrowserRouter>
			<>
				<Navbar/>
				<Switch>
					<Route path={'/'} exact component={Home}/>
					<Route path={'/login'} component={Login}/>
					<Route path={'/dashboard'} component={Dashboard}/>
					<Route path={'/posts/:id?'} component={Posts}/>
					<Route path='/404' component={NotFound}/>
					<Redirect from='/admin' to='/dashboard'/>
					<Redirect to='/404'/>
				</Switch>
			</>
		</BrowserRouter>
	)
}

export default App
