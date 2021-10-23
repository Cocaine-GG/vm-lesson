import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">Login</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/dashboard">Dashboard</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/posts">Posts</Link>
				</li>
			</ul>
		</nav>)
}

export default Navbar
