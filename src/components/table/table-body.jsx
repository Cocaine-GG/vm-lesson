import React from 'react'
import PropsTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const TableBody = ({ data, columns }) => {
	const renderContent = (item, column) => {
		if (columns[column].component) {
			const component = columns[column].component
			if (typeof component === 'function') {
				return component(item)
			}
			return component
		}
		return columns[column].path === 'name'
			? <Link to={`/users/${item._id}`}>{_.get(item, columns[column].path)}</Link>
			: _.get(item, columns[column].path)
	}
	return (
		<tbody>
			{data.map((item) => (
				<tr key={item._id}>
					{Object.keys(columns).map((column) => (
						<td key={column}>{renderContent(item, column)}</td>
					))}
				</tr>
			))}
		</tbody>
	)
}

TableBody.propTypes = {
	data: PropsTypes.array.isRequired,
	columns: PropsTypes.object.isRequired
}
export default TableBody
