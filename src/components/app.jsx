import React, {useState} from 'react'
import Users from './users'
import api from '../api'
import {usersDataTransform} from '../utils'

const App = () => {
	const [users,setUsers] = useState(usersDataTransform(api.users.fetchAll()))
	const userDeleteHandler = (id) => setUsers(users.filter(user=>user._id !== id))
	const userFavoriteHandler = (id) => {
		setUsers(users.map(user=> user._id === id ? ({...user, status: !user.status }) : {...user}))
	}
	return (
		<>
			<Users users={users} onDeleteUser={userDeleteHandler} onFavoriteUser={userFavoriteHandler} />
		</>)
}

export default App
