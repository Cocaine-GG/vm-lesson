import React, { useState } from 'react'
import Users from './users'
import Pagination from './pagination'
import { usersDataTransform } from '../utils'
import api from '../api'

const App = () => {
	const [users, setUsers] = useState(usersDataTransform(api.users.fetchAll()))
	const [currentPage, setCurrentPage] = useState(1)
	const handlerUserDelete = (id) => setUsers(users.filter((user) => user._id !== id))
	const handlerUserFavorite = (id) => setUsers(users.map((user) => user._id === id ? { ...user, status: !user.status } : { ...user }))
	return (
		<>
			<Users
				users={users}
				onDeleteUser={handlerUserDelete}
				onFavoriteUser={handlerUserFavorite}
				currentPage={currentPage}
			/>
			<Pagination
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				itemsCount={users.length}
			/>
		</>
	)
}

export default App
