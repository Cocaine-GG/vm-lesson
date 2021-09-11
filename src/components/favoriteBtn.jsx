import React from 'react'

const FavoriteBtn = ({id, status, onFavoriteUser}) => {
	return (
		<button onClick={()=>onFavoriteUser(id)} className='btn btn-dark mx-auto d-block'>
				{!status ? <i className="bi bi-star"/> : <i className="bi bi-star-fill text-warning"/>}
		</button>
	)
}

export default FavoriteBtn