import React from 'react'
import Badge from './badge'

const Table = ({users,userDeleteHandler}) => {
	return (
		<table className="table table-striped">
			<thead className='table-dark'>
			<tr>
				<th>Имя</th>
				<th>Качества</th>
				<th>Профессия</th>
				<th>Встретился, раз</th>
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
						<td>{user.rate}/5</td>
						<td><button onClick={()=>userDeleteHandler(user._id)} className="btn btn-danger"><i className="bi bi-trash"/></button></td>
					</tr>
				)
			})}
			</tbody>
		</table>

	)
}

export default Table
