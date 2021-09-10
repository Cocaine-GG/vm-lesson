import React, {useState} from 'react'
import Users from './users'
import Pagination from './pagination'
import api from '../api'
import {usersDataTransform} from '../utils'

const App = () => {
	const [users,setUsers] = useState(usersDataTransform(api.users.fetchAll()))
	const [page, setPage] = useState(1)
	const userDeleteHandler = (id) => setUsers(users.filter(user=>user._id !== id))
	const userFavoriteHandler = (id) => {
		setUsers(users.map(user=> user._id === id ? ({...user, status: !user.status }) : {...user}))
	}
	return (
		<>
			<Users users={users} onDeleteUser={userDeleteHandler} onFavoriteUser={userFavoriteHandler} page={page} />
			<Pagination
				setPage={setPage}
				page={page}
				usersLength={users.length}/>
		</>
	)
}

export default App
