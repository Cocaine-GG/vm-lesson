import React, { useEffect, useState } from 'react'
import api from '../api'
import { pagination, usersDataTransform } from '../utils'

import PeopleCounter from './people-counter'
import GroupList from './group-list'
import Users from './users'
import Pagination from './pagination'

const App = () => {
	const [users, setUsers] = useState(usersDataTransform(api.users.fetchAll()))
	const [professions, setProfessions] = useState(null)
	const [selectedProf, setSelectedProf] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	const handlerUserDelete = (id) =>
		setUsers(users.filter((user) => user._id !== id))
	const handlerUserFavorite = (id) =>
		setUsers(
			users.map((user) =>
				user._id === id ? { ...user, status: !user.status } : { ...user }
			)
		)
	const handlerProfessionSelect = (item) =>
		setSelectedProf(item) & setCurrentPage(1)
	const clearFilter = () => setSelectedProf() & setCurrentPage(1)
	const usersFilter = selectedProf
		? users.filter((user) => user.profession === selectedProf)
		: users
	const usersCrop = pagination(usersFilter, currentPage)
	const usersLength = usersFilter.length
	useEffect(() => {
		api.professions().then(setProfessions)
	}, [professions])

	return (
		<div>
			<PeopleCounter usersLength={usersLength} />
			<div className="d-flex align-items-start text-dark bg-light">
				{professions && (
					<div className="d-flex flex-column">
						<GroupList
							items={professions}
							selectedItem={selectedProf}
							onItemSelect={handlerProfessionSelect}
						/>
						<button onClick={clearFilter} className="btn btn-secondary my-2">
							Очистить
						</button>
					</div>
				)}
				<div className="w-100">
					<Users
						users={usersCrop}
						onDeleteUser={handlerUserDelete}
						onFavoriteUser={handlerUserFavorite}
					/>
					<Pagination
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
						itemsCount={usersFilter.length}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
