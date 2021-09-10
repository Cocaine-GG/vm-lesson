import React from 'react'

const Counter = ({id,count,name,onCountersResets}) => {
	const getBadgeClasses = () => {
		let badgeClasses = 'badge px-3 mx-2 bg-'
		badgeClasses += count===0 ? 'danger' : 'primary'
		return badgeClasses
	}
	const formCount = () => count === 0 ? 0 : count
	const style = {
		wrapper: {
			border: '1px solid #f3f3f3',
			borderRadius: '5px',
			margin: '5px 0',
			padding: '5px',
		},
		title: {textAlign: 'center', color: '#fff'}
	}
	return (
		<div style={style.wrapper}>
			<h2 style={style.title}>{name}</h2>
			<button onClick={() => onCountersResets(id,'INC')} className="btn btn-success align-self-center"><i className="bi bi-plus"/></button>
			<div className={getBadgeClasses()}>{formCount()}</div>
			<button disabled={!count} onClick={() => onCountersResets(id,'DEC')} className="btn btn-danger align-self-center"><i className="bi bi-dash"/></button>
		</div>)
}

export default Counter
