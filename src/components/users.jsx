import React from 'react'
import PropTypes from 'prop-types'
import Badge from './badge'
import UserRow from './userRow'

const Users = ({ users, onDeleteUser, onFavoriteUser }) => {
	if (!users.length) return null
	return (
		<table className="table table-striped">
			<thead className="table-dark">
				<tr>
					<th>Имя</th>
					<th>Качества</th>
					<th>Профессия</th>
					<th>Встретился, раз</th>
					<th className="text-center">Избранное</th>
					<th>Оценка</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{users.map((user) => {
					const qualities = user.qualities.map((quality) => (
						<Badge key={user._id + quality.name} quality={quality} />
					))
					return (
						<UserRow
							key={user._id}
							user={user}
							qualities={qualities}
							onDeleteUser={onDeleteUser}
							onFavoriteUser={onFavoriteUser}
						/>
					)
				})}
			</tbody>
		</table>
	)
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	onDeleteUser: PropTypes.func.isRequired,
	onFavoriteUser: PropTypes.func.isRequired
}

export default Users
