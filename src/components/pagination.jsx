import React from 'react'
import {NUMBER_ELEMENTS_FOR_ONE_PAGE} from '../utils'

const Pagination = ({usersLength,setPage, page}) => {
	const  numOfPage = usersLength/NUMBER_ELEMENTS_FOR_ONE_PAGE
	const pagesButtons = []
	for (let i = 0; i < numOfPage; i++) {
		const paginationClass = page === i + 1 ? 'page-item active' : 'page-item'
		pagesButtons.push(
			<li key={i} onClick={() => setPage(i + 1)} className={paginationClass}>
				<span className="page-link">{i + 1}</span>
			</li>)
	}
	return (
			<ul className="pagination justify-content-center">
				{pagesButtons}
			</ul>
	)
}

export default Pagination
