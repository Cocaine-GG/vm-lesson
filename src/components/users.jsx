import React, {useEffect, useState} from 'react'
import Badge from './badge'
import Table from './table'
import PropTypes from 'prop-types'
import api from '../api'
import GroupList from './groupList'

const Users = (props) => {
	const { users } = props
	const [professions, setProfessions] = useState(null)
	const [selectedProf, setSelectedProf] = useState()
	const persons = users.length > 1 && users.length < 5 ? 'человека' : 'человек'
	const badgeProps = {
		color: users.length ? 'primary' : 'danger',
		name: users.length ? `${users.length} ${persons} тусанет с тобой сегодня` : 'Никто с тобой не тусанет',
		style: { fontSize: '2rem', marginBottom: '0.5rem' }
	}
	const handlerProfessionSelect = (item) => {
		setSelectedProf(item)
	}
	const clearFilter = () => setSelectedProf()
	useEffect(() => {
		api.professions().then(setProfessions)
	}, [professions])
	return (
		<>
			<Badge quality={badgeProps} />
			{professions &&
			<GroupList
				items={professions}
				selectedItem={selectedProf}
				onItemSelect={handlerProfessionSelect}/>}
			<button onClick={clearFilter} className='btn btn-secondary my-2'>Очистить</button>
			{users.length ? <Table {...props} selectItem={selectedProf} /> : null}
		</>
	)
}

Users.propTypes = {
	users: PropTypes.array.isRequired
}

export default Users
