import React from 'react'

const Navbar = ({totalItems}) => {
	return (
		<nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<a className="nav-link" aria-current="page" href="/">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" aria-current="page" href="/">Home</a>
				</li>
			</ul>
			<button className="btn mx-3 mt-1 position-relative">
				<i style={{fontSize:'1.5rem', color: '#fff'}} className="bi bi-cart4">
					<span style={{fontSize:'0.75rem'}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						{totalItems}
					</span>
				</i>
			</button>
		</nav>
	)
}

export default Navbar
