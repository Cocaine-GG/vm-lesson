import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import QualitiesList from '../../qualities-list'
import { getUsersById } from '../../../api/fake.api/user.api'

const User = () => {
	const { userId } = useParams()
	const history = useHistory()
	const [user, setUser] = useState(null)
	const goToAllUsers = () => {
		history.replace('/users')
	}
	useEffect(() => {
		getUsersById(userId).then(setUser)
	}, [user])
	if (!user) return <h2>Loading...</h2>
	return (
		<>
			<div className="card my-2 mx-auto w-50">
				<img
					style={{ width: '200px', margin: 'auto' }}
					className="card-img-top"
					src="https://picsum.photos/200/300"
					alt="Card image cap"
				/>
				<h2 className="text-center">{user.name}</h2>
				<h3 className="text-center">Профессия: {user.profession.name}</h3>
				<div className="mx-auto">
					<QualitiesList qualities={user.qualities} />
				</div>
				<div className="card-body">
					<h4>Completed Meetings : {user.completedMeetings}</h4>
					<h4>Rating : {user.rate}/5</h4>
					<button className="btn btn-primary" onClick={() => goToAllUsers()}>
						Все Пользователи
					</button>
				</div>
			</div>
		</>
	)
}

export default User
