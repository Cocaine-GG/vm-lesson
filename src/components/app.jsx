import React, {useState} from 'react'
import Counters from './counters'
import Navbar from './navBar'
import counterActions from '../action/counterAction'

const App = () => {
	const initialState = [
		{count:0,id:1,name:'Вилка'},
		{count:0,id:2,name:'Ложка'},
		{count:0,id:3,name:'Нож'},
		{count:0,id:4,name:'Термос'},
		{count:0,id:5,name:'Горелка'},
		{count:0,id:6,name:'Фонарик'},
		{count:0,id:7,name:'Палатка'},
	]
	const [counters, setCounters] = useState(initialState)
	const handlerCounterClick = (id,type) => setCounters(counters.map(counter=>counterActions(counter,id,type)))
	const handlerCountersReset = () => setCounters(initialState)
	const wrapperStyles = {
		background: '#3f3f3f',
		height: '100vh',
		paddingTop: '10px'
	}
	return (
		<div>
			<Navbar totalItems={counters.reduce((a,b)=>a+b.count,0)}/>
			<main style={wrapperStyles}>
				<Counters
					onCounterClick={handlerCounterClick}
					onCountersResets={handlerCountersReset}
					counters={counters}
				/>
			</main>
		</div>
	)
}

export default App
