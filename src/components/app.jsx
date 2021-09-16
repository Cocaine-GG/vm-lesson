import React, { useEffect, useState } from 'react'
import api from '../api'
import { pagination, usersDataTransform } from '../utils'

import PeopleCounter from './people-counter'
import GroupList from './group-list'
import UsersTable from './users-table'
import Pagination from './pagination'

const App = () => {
	const [users, setUsers] = useState(usersDataTransform(api.users.fetchAll()))
	const [professions, setProfessions] = useState(null)
	const [selectedProf, setSelectedProf] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	const [sortBy, setSortBy] = useState({iter: null, order : ''})
	const handlerUserDelete = (id) =>
		setUsers(users.filter((user) => user._id !== id))
	const handlerUserFavorite = (id) =>
		setUsers(
			users.map((user) =>
				user._id === id ? { ...user, status: !user.status } : { ...user }
			)
		)
	const handlerUsersSort = (item) => {
		const {order} = sortBy
		if(order === '') {
			setSortBy({iter:item, order: 'asc'})
		}
		if (order === 'asc'){
			setSortBy({iter:item, order: 'desc'})
		}
		if (order === 'desc'){
			setSortBy({iter:null, order: ''})
		}
	}
	const handlerProfessionSelect = (item) =>
		setSelectedProf(item) & setCurrentPage(1)
	const clearFilter = () => setSelectedProf() & setCurrentPage(1)

	console.log(users)
	const usersFilter = selectedProf
		? users.filter(
			(user) =>
				JSON.stringify(user.profession) === JSON.stringify(selectedProf)
		)
		: users
	const usersSorted = usersFilter.sort((a,b)=>{
		const {iter, order} = sortBy
		if(!iter || order === '') return
		let currentEl = (order === 'asc') ? a : b
		let nextEl = (order === 'asc') ? b : a
		if(!isNaN(a[iter]) && !isNaN(b[iter])) return currentEl[iter] - nextEl[iter]

		const [first, second] = iter.split('.')
		if(!second) {
			return currentEl[iter].localeCompare(nextEl[iter])
		}else {
			return currentEl[first][second].localeCompare(nextEl[first][second])
		}
	})
	const usersCrop = pagination(usersSorted, currentPage)
	const usersLength = usersSorted.length
	useEffect(() => {
		api.professions().then(setProfessions)
	}, [professions])

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
						<UsersTable
							users={usersCrop}
							onDeleteUser={handlerUserDelete}
							onFavoriteUser={handlerUserFavorite}
							onSort={handlerUsersSort}
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

export default App
