import React from 'react'

const PeopleCounter = ({usersLength}) => {
	const persons = usersLength > 1 && usersLength < 5 ? 'человека' : 'человек'
	const style = {
		color: usersLength ? 'success' : 'danger',
		name: usersLength ? `${usersLength} ${persons} тусанет с тобой сегодня` : 'Никто с тобой не тусанет',
		style: { fontSize: '2rem', fontWeight: 'bold', margin: '0', width: '100%', color: '#fff', textAlign: 'center' }
	}
	return (
		<div style={style.style} className={`bg-${style.color}`}>
			{style.name}
		</div>
	)
}

export default PeopleCounter
