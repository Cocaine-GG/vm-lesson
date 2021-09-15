const NUMBER_ELEMENTS_FOR_ONE_PAGE = 4
const usersDataTransform = (users) =>
	users.map((user) => ({ ...user, status: false }))
const pagination = (arr, currentPage) =>
	arr.filter(
		(el, i) =>
			i < NUMBER_ELEMENTS_FOR_ONE_PAGE * currentPage &&
			i >= NUMBER_ELEMENTS_FOR_ONE_PAGE * (currentPage - 1)
	)

export { usersDataTransform, pagination, NUMBER_ELEMENTS_FOR_ONE_PAGE }
