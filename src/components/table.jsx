import React from 'react'
import Badge from './badge'

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
				return (
					<tr key={user._id}>
						<td >{user.name}</td>
						<td>{qualities}</td>
						<td>{user.profession.name}</td>
						<td>{user.completedMeetings}</td>
						<td>
							<button onClick={()=>onFavoriteUser(user._id)} className='btn btn-dark mx-auto d-block'>
								{!user.status ? <i className="bi bi-star"/> : <i className="bi bi-star-fill text-warning"/>}
							</button>
						</td>
						<td>{user.rate}/5</td>
						<td><button onClick={()=>onDeleteUser(user._id)} className="btn btn-danger"><i className="bi bi-trash"/></button></td>
					</tr>
				)
			})}
			</tbody>
		</table>

	)
}

export default Table
