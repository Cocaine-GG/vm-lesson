import React from 'react'
import {useHistory} from 'react-router-dom'

const Post = ({id,posts}) => {
	const history = useHistory()

	const getPostById = (id) => posts.find(post=>post.id.toString()===id)
	const post = getPostById(id)
	const handleSave = () => {
		history.replace('/posts')
	}
	if(!post) return <h2>Post with id: <span style={{color:'tomato'}}>{id}</span> not found</h2>

	return (
		<>
			<h2>{post.label}</h2>
			<button onClick={()=>handleSave()}>Save</button>
		</>
	)
}

export default Post
