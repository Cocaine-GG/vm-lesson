import React from 'react'
import PropTypes from 'prop-types'
import {NUMBER_ELEMENTS_FOR_ONE_PAGE} from '../utils'

const Pagination = ({ itemsCount, setCurrentPage, currentPage }) => {
	const numOfPage = itemsCount / NUMBER_ELEMENTS_FOR_ONE_PAGE
	if (numOfPage <= 1) return null

	const changePage = (direction) => {
		if (currentPage < numOfPage) {
			if (direction === 'next') setCurrentPage(currentPage + 1)
		}
		if (currentPage > 1) {
			if (direction === 'prev') setCurrentPage(currentPage - 1)
		}
	}
	const style = {cursor: 'pointer', userSelect: 'none'}
	const pageButtons = []
	for (let i = 1; i <= numOfPage; i++) {
		const paginationClass = currentPage === i ? 'page-item active' : 'page-item'
		pageButtons.push(
			<li key={i} onClick={() => setCurrentPage(i)} className={paginationClass}>
				<span className="page-link">{i}</span>
			</li>)
	}
	return (
		<ul style={style} className="pagination justify-content-center">
			<li onClick={() => changePage('prev')} className="page-item"><span className="page-link">Prev</span></li>
			{pageButtons}
			<li onClick={() => changePage('next')} className="page-item"><span className="page-link">Next</span></li>
		</ul>)
}

Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	setCurrentPage: PropTypes.func.isRequired
}

export default Pagination