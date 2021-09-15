import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
	items,
	valueProperty,
	contentProperty,
	onItemSelect,
	selectedItem
}) => {
	return (
		<ul className="list-group text-center">
			{Object.values(items).map((item) => {
				const className =
					item === selectedItem ? 'list-group-item active' : 'list-group-item'
				return (
					<li
						onClick={() => onItemSelect(item)}
						key={item[valueProperty]}
						className={className}
						role="button"
					>
						{item[contentProperty]}
					</li>
				)
			})}
		</ul>
	)
}

GroupList.defaultProps = {
	valueProperty: '_id',
	contentProperty: 'name'
}
GroupList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	valueProperty: PropTypes.string.isRequired,
	contentProperty: PropTypes.string.isRequired,
	onItemSelect: PropTypes.func.isRequired,
	selectedItem: PropTypes.object
}

export default GroupList
