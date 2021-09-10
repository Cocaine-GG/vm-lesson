const counterActions = (counter,id,type) => {
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
}

export default counterActions