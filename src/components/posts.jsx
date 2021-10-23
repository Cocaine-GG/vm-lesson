import React from 'react'
import {useParams} from 'react-router-dom'
import PostsList from './posts-list'
import Post from './post'

const Posts = () => {
	const params = useParams()
	const posts = [
		{id: 1, label: 'Post 1'},
		{id: 2, label: 'Post 2'},
		{id: 3, label: 'Post 3'}
	]
	const postId = params.id
	return <>{postId ? <Post id={postId} posts={posts} /> : <PostsList posts={posts}/>}</>
}

export default Posts
