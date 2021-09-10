import React from 'react'
import Counter from './counter'

const Counters = ({counters, onCounterClick, onCountersResets}) => {
	const style = {
		countersWrapper: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			fontSize: '2rem'
		},
		button : {
			display: 'block',
			margin: '0 20px 10px auto'
		}
	}
	return (
		<>
			<button style={style.button} className='btn btn-info' onClick={onCountersResets}>Reset</button>
			<div style={style.countersWrapper}>
				{counters.map(el=><Counter key={el.id} {...el} onCountersResets={onCounterClick}/>)}
			</div>
		</>
	)
}

export default Counters
