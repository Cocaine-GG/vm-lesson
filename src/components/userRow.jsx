import React from 'react'
import FavoriteBtn from './favoriteBtn'

const UserRow = ({user,qualities,onFavoriteUser,onDeleteUser}) => {
	return (
		<tr>
			<td>{user.name}</td>
			<td>{qualities}</td>
			<td>{user.profession.name}</td>
			<td>{user.completedMeetings}</td>
			<td><FavoriteBtn status={user.status} id={user._id} onFavoriteUser={onFavoriteUser}/></td>
			<td>{user.rate}/5</td>
			<td>
				<button onClick={() => onDeleteUser(user._id)} className="btn btn-danger"><i className="bi bi-trash"/></button>
			</td>
	</tr>)
}

export default UserRow