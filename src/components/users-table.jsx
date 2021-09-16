import React from 'react'
import PropTypes from 'prop-types'
import UserRow from './user-row'

const UsersTable = ({ users, onDeleteUser, onFavoriteUser, onSort }) => {
	return (
		<table className="table table-striped">
			<thead className="table-dark">
				<tr>
					<th role="button" onClick={()=>onSort('name')}>Имя <i className="bi bi-sort-down"></i></th>
					<th>Качества</th>
					<th role="button" onClick={()=>onSort('profession.name')}>Профессия <i className="bi bi-sort-down"></i></th>
					<th role="button" onClick={()=>onSort('completedMeetings')}>Встретился, раз</th>
					<th role="button" onClick={()=>onSort('status')} className="text-center">Избранное</th>
					<th role="button" onClick={()=>onSort('rate')}>Оценка</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{users.map((user) => {
					return (
						<UserRow
							key={user._id}
							user={user}
							onDeleteUser={onDeleteUser}
							onFavoriteUser={onFavoriteUser}
						/>
					)
				})}
			</tbody>
		</table>
	)
}

UsersTable.propTypes = {
	users: PropTypes.array.isRequired,
	onDeleteUser: PropTypes.func.isRequired,
	onFavoriteUser: PropTypes.func.isRequired,
	onSort: PropTypes.func.isRequired
}

export default UsersTable
