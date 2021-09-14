import React from 'react'
import Badge from './badge'
import UserRow from './userRow'
import { pagination} from '../utils'
import PropTypes from 'prop-types'

const Table = ({ users: allUsers, onDeleteUser, onFavoriteUser, currentPage, selectItem }) => {

	const usersFilter = selectItem ? allUsers.filter(user=>user.profession===selectItem) : allUsers
	const usersCrop = pagination(usersFilter,currentPage)
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
			{usersCrop.map((user) => {
					const qualities = user.qualities.map((quality) => (<Badge key={user._id + quality.name} quality={quality}/>))
					return (<UserRow
							key={user._id}
							user={user}
							qualities={qualities}
							onDeleteUser={onDeleteUser}
							onFavoriteUser={onFavoriteUser}
						/>)
				})

			}
			</tbody>
		</table>
	)
}

Table.propTypes = {
	users: PropTypes.array.isRequired,
	onDeleteUser: PropTypes.func.isRequired,
	onFavoriteUser: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
}

export default Table
