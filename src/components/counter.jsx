import React from 'react'

const Counter = (props) => {
	const {id,count,name,handlerClick} = props
	const getBadgeClasses = () => {
		let badgeClasses = 'badge px-3 mx-2 bg-'
		badgeClasses += count===0 ? 'danger' : 'primary'
		return badgeClasses
	}
	const formCount = () => count === 0 ? 0 : count
	const style = {
		wrapper: {
			border: '2px solid #f3f3f3',
			borderRadius: '5px',
			margin: '5px 0',
			padding: '5px',
		},
		title: {textAlign: 'center', color: '#fff'}
	}
	return (
		<div style={style.wrapper}>
			<h2 style={style.title}>{name}</h2>
			<button onClick={() => handlerClick(id,'INC')} className="btn btn-success align-self-center">Increment</button>
			<div className={getBadgeClasses()}>{formCount()}</div>
			<button disabled={!count} onClick={() => handlerClick(id,'DEC')} className="btn btn-danger align-self-center">Decrement</button>
		</div>)
}

export default Counter
