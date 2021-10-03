import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ selectedSort, onSort, columns }) => {
	const { order, path } = selectedSort
	const handlerSort = (item) => {
		path === item
			? onSort({ ...selectedSort, order: order === 'asc' ? 'desc' : 'asc' })
			: onSort({ path: item, order: 'asc' })
	}
	return (
		<thead className="table-dark">
			<tr>
				{Object.keys(columns).map((column) => (
					<th
						key={column}
						{...{ role: columns[column].path && 'button' }}
						onClick={
							columns[column].path
								? () => handlerSort(columns[column].path)
								: undefined
						}
					>
						{columns[column].path === path && order === 'desc' && (
							<i className="bi bi-caret-down-fill" />
						)}
						{columns[column].path === path && order === 'asc' && (
							<i className="bi bi-caret-up-fill" />
						)}
						{columns[column].name}
					</th>
				))}
			</tr>
		</thead>
	)
}

TableHeader.propTypes = {
	selectedSort: PropTypes.object.isRequired,
	onSort: PropTypes.func.isRequired,
	columns: PropTypes.object.isRequired
}
export default TableHeader
