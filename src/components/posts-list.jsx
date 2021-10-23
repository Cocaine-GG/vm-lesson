import React from 'react'
import {Link} from 'react-router-dom'

const PostsList = ({posts}) => {
	return (
		<>
			{posts.map(el=> <Link to={`posts/${el.id}`} key={el.id}><h2>{el.label}</h2></Link>)}
		</>
	)
}

export default PostsList
