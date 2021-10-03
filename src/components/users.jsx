import React, { useEffect, useState } from 'react'
import api from '../api'
import { pagination, usersDataTransform } from '../utils'

import PeopleCounter from './people-counter'
import GroupList from './group-list'
import Table from './table/table'
import Pagination from './pagination'

const Users = () => {
	const [users, setUsers] = useState(null)
	const [professions, setProfessions] = useState(null)
	const [selectedProf, setSelectedProf] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	useEffect(() => {
		api.professions().then(setProfessions)
		api.users().then(usersDataTransform).then(setUsers)
		console.log('Если добавляю users в useEffect, получаю зацикливание...')
	}, [professions])
	const [sortBy, setSortBy] = useState({
		path: 'completedMeetings',
		order: 'desc'
	})
	if (!users) {
		return 'loading....'
	}
	const handlerUserDelete = (id) =>
		setUsers(users.filter((user) => user._id !== id))
	const handlerUserFavorite = (id) =>
		setUsers(
			users.map((user) =>
				user._id === id ? { ...user, status: !user.status } : { ...user }
			)
		)
	const handlerSort = (item) => setSortBy(item)

	const handlerProfessionSelect = (item) =>
		setSelectedProf(item) & setCurrentPage(1)
	const clearFilter = () => setSelectedProf() & setCurrentPage(1)

	const usersFilter = selectedProf
		? users.filter(
			(user) =>
				JSON.stringify(user.profession) === JSON.stringify(selectedProf)
		)
		: users
	const usersSorted = usersFilter.sort((a, b) => {
		const { path, order } = sortBy
		if (!path || order === '') return a
		const currentEl = order === 'asc' ? a : b
		const nextEl = order === 'asc' ? b : a
		if (!isNaN(a[path]) && !isNaN(b[path])) { return currentEl[path] - nextEl[path] }

		const [first, second] = path.split('.')
		if (!second) {
			return currentEl[path].localeCompare(nextEl[path])
		} else {
			return currentEl[first][second].localeCompare(nextEl[first][second])
		}
	})
	const usersCrop = pagination(usersSorted, currentPage)
	const usersLength = usersSorted.length

	return (
		<>
			<PeopleCounter usersLength={usersLength} />
			<div className="d-flex align-items-start text-dark bg-light bg-gradient">
				{professions && (
					<div className="d-flex flex-column m-2">
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
				{usersLength > 0 && (
					<div className="w-100 m-2">
						<Table
							users={usersCrop}
							onDeleteUser={handlerUserDelete}
							onFavoriteUser={handlerUserFavorite}
							selectedSort={sortBy}
							onSort={handlerSort}
						/>
						<Pagination
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							itemsCount={usersSorted.length}
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default Users
