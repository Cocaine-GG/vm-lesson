import React from 'react'
import Badge from './badge'
import UserRow from './userRow'

const Table = ({users,onDeleteUser,onFavoriteUser}) => {
	return (
		<table className="table table-striped">
			<thead className='table-dark'>
			<tr>
				<th>Имя</th>
				<th>Качества</th>
				<th>Профессия</th>
				<th>Встретился, раз</th>
				<th className='text-center'>Избранное</th>
				<th>Оценка</th>
				<th/>
			</tr>
			</thead>
			<tbody>
			{users.map(user=>{
				const qualities = user.qualities.map(quality=><Badge key={user._id+quality.name} quality={quality}/>)
				return <UserRow
					key={user._id}
					user={user}
					qualities={qualities}
					onDeleteUser={onDeleteUser}
					onFavoriteUser={onFavoriteUser}/>
			})}
			</tbody>
		</table>
	)
}

export default Table
