import React, {useState} from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	let badgeClasses = 'badge px-3 mx-2 bg-'
	badgeClasses += count===0 ? 'danger' : 'primary'
	const formCount = () => count === 0 ? '0' : count
	const handlerClick = (type) => {
		if (type === 'INC') {
			setCount(count + 1)
		}
		if (type === 'DEC') {
			if (count > 0) {
				setCount(count - 1)
			}
		}
	}
	const wrapperStyles = {
		background: '#3f3f3f',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '2rem'
	}
	return (
		<div style={wrapperStyles}>
			<button onClick={() => handlerClick('INC')} className="btn btn-success align-self-center">Increment</button>
			<div className={badgeClasses}>{formCount()}</div>
			<button disabled={!count} onClick={() => handlerClick('DEC')} className="btn btn-danger align-self-center">Decrement</button>
		</div>)
}

export default Counter
