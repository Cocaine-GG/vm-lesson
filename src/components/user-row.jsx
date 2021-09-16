import React from 'react'
import FavoriteBtn from './favorite-btn'
import PropTypes from 'prop-types'
import Badge from './badge'

const UserRow = ({ user, onFavoriteUser, onDeleteUser }) => {
	const { name, profession, completedMeetings, status, rate, _id } = user
	return (
		<tr>
			<td>{name}</td>
			<td>
				{user.qualities.map((quality) => (
					<Badge key={user._id + quality.name} quality={quality} />
				))}
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>
				<FavoriteBtn status={status} id={_id} onFavoriteUser={onFavoriteUser} />
			</td>
			<td>{rate}/5</td>
			<td>
				<button onClick={() => onDeleteUser(_id)} className="btn btn-danger">
					<i className="bi bi-trash" />
				</button>
			</td>
		</tr>
	)
}

UserRow.propTypes = {
	user: PropTypes.object.isRequired,
	onFavoriteUser: PropTypes.func.isRequired,
	onDeleteUser: PropTypes.func.isRequired
}

export default UserRow
