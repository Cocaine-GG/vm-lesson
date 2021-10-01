import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './table-header'
import TableBody from './table-body'
import FavoriteBtn from '../favorite-btn'

const Table = ({ users, selectedSort,onSort, onFavoriteUser, onDeleteUser }) => {
	const columns = {
		name : {path: 'name', name: 'Имя'},
		qualities: {name: 'Качество'},
		profession: {path: 'profession.name', name: 'Профессия'},
		completedMeetings: {path: 'completedMeetings', name: 'Встретился, раз'},
		rate: {path: 'rate', name: 'Оценка'},
		status: {path: 'status', name: 'Избранное', component: user => <FavoriteBtn status={user.status} id={user._id} onFavoriteUser={onFavoriteUser} />},
		delete: { component: user => <button onClick={() => onDeleteUser(user._id)} className="btn btn-danger">
				<i className="bi bi-trash" />
			</button>}
	}
	return (
		<table className="table table-striped">
			<TableHeader {...{selectedSort, onSort,columns}} />
			<TableBody {...{columns,data:users,onFavoriteUser, onDeleteUser}}	/>
		</table>
	)
}

Table.propTypes = {
	users: PropTypes.array.isRequired,
	selectedSort: PropTypes.object.isRequired,
	onSort: PropTypes.func.isRequired,
	onFavoriteUser: PropTypes.func.isRequired,
	onDeleteUser: PropTypes.func.isRequired
}

export default Table
