const usersDataTransform = users => users.map(user=>({...user, status: false}))

export {
	usersDataTransform
}