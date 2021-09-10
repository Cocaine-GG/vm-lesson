import React, {useState} from 'react'
import Counter from './counter'

const Counters = () => {
	const initialState = [
		{count:0,id:1,name:'Вилка'},
		{count:0,id:2,name:'Ложка'},
		{count:0,id:3,name:'Нож'},
		{count:0,id:4,name:'Термос'},
		{count:0,id:5,name:'Горелка'},
	]
	const [counters, setCounters] = useState(initialState)
	const handlerClick = (id,type) => {
		const newCounters = counters.map(counter=>{
			if (counter.id===id){
				if (type === 'INC') {
					counter.count++
				}
				if (type === 'DEC') {
					if (counter.count > 0) {
						counter.count--
					}
				}
			}
			return counter
		})
		setCounters(newCounters)
	}
	const handlerReset = () => setCounters(initialState)
	const wrapperStyles = {
		background: '#3f3f3f',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '2rem'
	}
	return (
		<div style={wrapperStyles}>
			<button className='btn btn-info' onClick={handlerReset}>Reset</button>
			{counters.map(el=><Counter key={el.id} {...el} handlerClick={handlerClick}/>)}
		</div>
	)
}

export default Counters
