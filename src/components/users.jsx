import React, {useState} from 'react'
import api from '../api'
import Badge from './badge'
import Table from './table'

const Users = () => {
	const [users,setUsers] = useState(api.users.fetchAll())
	const userDeleteHandler = (id) => setUsers(users.filter(user=>user._id !== id))
	const persons = users.length > 1 && users.length < 5 ? 'человека' : 'человек'
	const badgeProps = {
		color: users.length ? 'primary' : 'danger',
		name: users.length ? `${users.length} ${persons} тусанет с тобой сегодня` : 'Никто с тобой не тусанет',
		style: {fontSize: '2rem',marginBottom: '0.5rem'}
	}
	return (
		<>
			<Badge quality={badgeProps}/>
			{users.length ? <Table users={users} userDeleteHandler={userDeleteHandler}/> : null}
		</>
	)
}

export default Users