const usersDataTransform = users => users.map(user=>({...user, status: false}))
const NUMBER_ELEMENTS_FOR_ONE_PAGE = 4

export {
	usersDataTransform,
	NUMBER_ELEMENTS_FOR_ONE_PAGE
}